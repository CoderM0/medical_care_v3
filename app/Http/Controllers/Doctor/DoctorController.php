<?php

namespace App\Http\Controllers\Doctor;

use App\Http\Controllers\Controller;
use App\Models\Appointment;
use App\Models\Department;
use App\Models\Doctor;
use App\Models\Employee;
use App\Models\Inventory;
use App\Models\LabTest;
use App\Models\MedicalDescription;
use App\Models\MedicalRecord;
use App\Models\OuterDescription;
use App\Models\Patient;
use App\Models\Pharma;
use App\Models\Task;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class DoctorController extends Controller
{
    public function getit()
    {
        return  Employee::with('doctor')
            ->where('user_id', Auth::id())->first();
    }

    //

    public function index()
    {
        $doctor_id = Auth::user()->employee->doctor->id;

        $appointments = Appointment::with('doctor', 'patient')->where('doctor_id', $doctor_id)->where('ended', false)->get();

        // $futureItems = collect($appointments)->filter(function ($item) {
        //     $date = Carbon::parse($item->date)->toDateString();
        //     $time = Carbon::parse($item->time)->toTimeString();
        //     $dateTimeString = $date . ' ' . $time;
        //     $eventDateTime = Carbon::parse($dateTimeString);
        //     return $eventDateTime->addMinute(30)->isFuture();
        // })->values()->all();


        return Inertia::render("Doctor/DoctorDashboard", ['employee' => $this->getit(), 'appointments' => $appointments]);
    }

    public function add_task()
    {

        return Inertia::render("Doctor/AddTask", ['employees' => Employee::where('job_description_id', 2)->get(), 'employee' => Employee::with('doctor')->where('user_id', Auth::id())->first(), 'tasks' => Task::with('employee')->where('commander_id', Employee::where('user_id', Auth::id())->first()->id)->get()]);
    }
    public function add_description($patient_id)
    {
        $pharmas = Pharma::with('employee')->get();
        $medcine = Inventory::all();
        return Inertia::render("Doctor/AddDescription", ['medcine' => $medcine, 'patient' => Patient::find($patient_id), 'pharma' => $pharmas, 'employee' => Employee::with('doctor')->where('user_id', Auth::id())->first()]);
    }
    public function save_description($patient_id)
    {


        request()->validate(['description_title' => 'required']);
        $total_price = 0;
        // dd(request()->description);
        foreach (request()->description as $med) {
            $total_price += $med["medcine_price"] * $med["quantity"];
        }
        MedicalDescription::create([
            'disease' => request()->description_title,
            'medcines' => request()->description,
            'patient_id' => $patient_id,
            'total_price' => $total_price,
            'doctor_id' => Auth::user()->employee->doctor->id
        ]);
        if (request()->outer_description) {
            OuterDescription::create([
                'disease' => request()->description_title,
                'medcines' => request()->outer_description,
                'patient_id' => $patient_id,
                'doctor_name' => Auth::user()->employee->name
            ]);
        }
        return redirect()->route('doctor.dashboard');
    }

    public function add_lab_test(Patient $patient_id)
    {
        return Inertia::render("Doctor/AddLabTest", ['patient' => $patient_id, 'employee' => Employee::with('doctor')->where('user_id', Auth::id())->first()]);
    }
    public function save_lab_test($patient_id)
    {
        request()->validate([
            'lab_test_description' => 'required'
        ]);
        LabTest::create([
            'lab_test_description' => request()->lab_test_description,
            'lab_test_result' => "not ready yet",
            'patient_id' => $patient_id,
            'doctor_id' => Auth::user()->employee->doctor->id
        ]);
        return redirect()->route("doctor.dashboard");
    }
    public function show_medical_record($patient_id)
    {
        $med = MedicalRecord::with(['patient', 'doctor', 'doctor.employee'])->where('patient_id', $patient_id)->first();
        // dd($med);
        return Inertia::render("Doctor/ShowPatientMediclRecord", ['employee' => Employee::with('doctor')->where('user_id', Auth::id())->first(), 'med_record' => $med]);
    }
    public function save_task()
    {
        $validated = request()->validate([
            'employee_id' => 'required',
            'commander_id' => 'required',
            'task_description' => 'required',
        ]);
        Task::create($validated);

        return redirect()->back();
    }
    public function end_appointment(Appointment $appointment)
    {
        $appointment->ended = true;
        $appointment->save();
        return redirect()->back();
    }
    public function delete_appointment(Appointment $appointment)
    {

        $appointment->delete();
        return redirect()->back();
    }
    public function ended_appointment()
    {
        $doctor_id = Auth::user()->employee->doctor->id;

        $appointments = Appointment::with('doctor', 'patient')->where('doctor_id', $doctor_id)->where('ended', true)->get();

        return Inertia::render("Doctor/EndedAppointments", ['employee' => $this->getit(), 'appointments' => $appointments]);
    }
}
