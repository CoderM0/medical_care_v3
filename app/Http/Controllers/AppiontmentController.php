<?php

namespace App\Http\Controllers;

use App\Models\Appointment;
use App\Models\BusinessHoure;
use App\Models\Doctor;
use App\Models\Employee;
use App\Models\Patient;
use App\Models\Safe;
use App\Models\SafeRecord;
use App\Models\User;
use Carbon\CarbonConverterInterface;
use Carbon\CarbonInterval;
use Carbon\CarbonPeriod;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use Symfony\Contracts\Service\Attribute\Required;

class AppiontmentController extends Controller
{
    public function index($doctor_id)
    {
        $doctor = Doctor::with('employee')->findOrFail($doctor_id);

        $datePeriod = CarbonPeriod::create(now(), now()->addDays(6));
        $availbaleSlotes = [];
        foreach ($datePeriod as $date) {
            $dayName = $date->format("l");
            $busHoures = BusinessHoure::where('doctor_id', $doctor_id)->where("day", $dayName)->first();
            $hours = $busHoures->times_period;
            $currenAppointments = Appointment::where('date', $date->toDateString())->pluck('time')->map(fn($time) => $time->format("H:i"))->toArray();

            $availabelHoures = array_diff($hours, $currenAppointments);

            $availbaleSlotes[] = [
                'day_name' => $dayName,
                'date' => $date->format('d M'),
                'full_date' => $date->format("Y-m-d"),
                'available_hourse' => $availabelHoures,
                'off' => $busHoures->off
            ];
        }

        return Inertia::render("Patient/BookanAppointment", ['availbaleSlotes' => $availbaleSlotes, 'doctor' => $doctor, 'patient' => Patient::with('user')->where('user_id', Auth::id())->first()]);
    }
    public function reserve_appointment()
    {
        request()->validate([
            'price' => 'required',
            'employee_id' => 'required',
            'card_num' => 'required',
            'details' => 'required',
            'reservation' => 'required',
        ]);
        $card_num = request()->card_num;
        DB::transaction(function () use ($card_num) {
            $safe = Safe::lockForUpdate()->firstOrFail();
            $safe->increment('current_amount', request()->price);
            SafeRecord::create([
                'employee_id' => request()->employee_id,
                'operation' => 'ايداع',
                'amount' => request()->price,
                'purpose' => "معاينة برقم البطاقة : $card_num",
            ]);
        });

        $patient = Auth::user()->patient;

        Appointment::create([
            'date' => request()->reservation["date"],
            'time' => request()->reservation["time"],
            'details' => request()->details,
            'doctor_id' => request()->reservation["doctor_id"],
            'patient_id' => $patient->id,
        ]);
        $patient->active = true;
        $patient->save();
        return redirect()->route("patient.view_appointments");
    }
    public function delete_appointment(Appointment $appointment)
    {
        $pat_id = $appointment->patient_id;
        DB::transaction(function () use ($pat_id, $appointment) {
            $safe = Safe::lockForUpdate()->firstOrFail();
            $safe->increment('current_amount', 10);
            SafeRecord::create([
                'employee_id' => $appointment->doctor->employee_id,
                'operation' => 'سحب',
                'amount' => 10,
                'purpose' => "  استعادة نصف قيمة الحجز بعد الالغاء للمريض صاحب الكود : $pat_id",
            ]);
        });
        $appointment->delete();
        $patient = Patient::find($pat_id);
        if ($patient->appointments()->count() === 0) {
            $patient->update(['active' => false]);
        }
        return redirect()->back();
    }
}
