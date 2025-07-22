<?php

namespace App\Http\Controllers\Patient;

use App\Http\Controllers\Controller;
use App\Models\Appointment;
use App\Models\Department;
use App\Models\Doctor;
use App\Models\Employee;
use App\Models\MedicalRecord;
use App\Models\OuterDescription;
use App\Models\OuterMedicalRecord;
use App\Models\Patient;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class PatientController extends Controller
{
    public function index()
    {
        $deps = Department::with(['employees'])->get();

        return Inertia::render("Patient/PatientDashboard", ['patient' => Patient::with('user')->where('user_id', Auth::id())->first(), 'departments' => $deps]);
    }
    public function view_dep($department_id)
    {
        $depemployees = Employee::with(['specialty', 'department', 'doctor'])->where('department_id', $department_id)->where('job_description_id', 1)->get();

        $depdesc = Department::find($department_id);
        $depdesc = $depdesc->description;
        return Inertia::render("Patient/ViewDepartment", ['patient' => Patient::with('user')->where('user_id', Auth::id())->first(), 'department_doctors' => $depemployees, 'depdesc' => $depdesc]);
    }
    public function view_doctor_profile($employee_id)
    {
        $employee = Employee::with(['job_description', 'department', 'specialty', 'user'])->find($employee_id);
        return Inertia::render("Patient/ViewDocProfile", ['patient' => Patient::with('user')->where('user_id', Auth::id())->first(), 'employee' => $employee]);
    }
    public function view_patient_appointments()
    {

        $appointments = Appointment::with(['doctor', 'patient', 'doctor.employee'])->where('patient_id', Auth::user()->patient->id)->where("ended", false)->get();
        // $futureItems = collect($appointments)->filter(function ($item) {
        //     $date = Carbon::parse($item->date)->toDateString();
        //     $time = Carbon::parse($item->time)->toTimeString();
        //     $dateTimeString = $date . ' ' . $time;
        //     $eventDateTime = Carbon::parse($dateTimeString);
        //     return $eventDateTime->addMinute(30)->isFuture();
        // })->values()->all();
        return Inertia::render("Patient/ShowPatientAppointments", ['patient' => Patient::with('user')->where('user_id', Auth::id())->first(), 'appointments' => $appointments]);
    }
    public function show_medical_record($patient_id)
    {
        $med = MedicalRecord::with(['patient', 'doctor', 'doctor.employee'])->where('patient_id', $patient_id)->first();
        return Inertia::render("Patient/ShowMedicalRecord", ['patient' => Patient::with('user')->where('user_id', Auth::id())->first(), 'med_rec' => $med]);
    }
    public function view_profile()
    {
        return Inertia::render("Patient/ViewPatientProfile", ['patient' => Patient::with('user')->where('user_id', Auth::id())->first()]);
    }
    public function edit_profile()
    {
        return Inertia::render("Patient/EditProfileInfo", ['patient' => Patient::with('user')->where('user_id', Auth::id())->first()]);
    }
    public function update_profile()
    {
        $patient = Patient::with('user')->where('user_id', Auth::id())->first();

        $validated = request()->validate([
            'name' => 'required|string|max:255',
            'gender' => 'sometimes|string',
            'birth' => 'sometimes',
            'additional_case' => 'sometimes|string',
        ]);
        request()->validate([
            'blood_type' => 'sometimes|string',
            'blood_resos' => 'sometimes|string',
            'avatar' => 'sometimes|image'
        ]);
        if (request()->file('avatar')) {
            Storage::disk('public')->delete($patient->avatar);
            $avataePath = Storage::disk("public")->put("patients/", request()->avatar);
            $patient->avatar = $avataePath;
            $patient->save();
        }
        $blood_type = request()->blood_type . request()->blood_resos;
        $patient->update(['blood_type' => $blood_type, ...$validated]);
        return redirect()->back();
    }
    ////


    public function add_to_medical_record()
    {
        return Inertia::render("Patient/AddOuterDesc", ['patient' => Patient::with('user')->where('user_id', Auth::id())->first()]);
    }
    public function save_outerdescription($patient_id)
    {

        $newItemToAppend = ['disease' => request()->disease, 'medcines' => request()->medcines, 'out_hospital' => true, 'date' => request()->desc_date, 'doctor_name' => request()->doctor_name];
        $model = MedicalRecord::where('patient_id', $patient_id)->first();
        if ($model) {

            $descriptions = (array) ($model->descriptions ?? []);
            $descriptions[] = $newItemToAppend;
            $model->descriptions = $descriptions;
            $model->save();
        } else {
            MedicalRecord::create([
                'patient_id' => $patient_id,
                'descriptions' => [$newItemToAppend],
                'lab_tests' => []
            ]);
            return redirect()->route("patient.view_medical_record", $patient_id);
        }
    }
    public function save_outer_lab_test($patient_id)
    {
        request()->validate([
            'lab_test_description' => 'required',
            'lab_test_result' => 'required',
            'lab_date' => 'required',
            'doctor_name' => 'required',
        ]);
        $newItemToAppend = ['lab_test_description' => request()->lab_test_description, 'lab_test_result' => request()->lab_test_result, 'out_hospital' => true, 'date' => request()->lab_date, 'doctor_name' => request()->doctor_name];
        $model = MedicalRecord::where('patient_id', $patient_id)->first();
        if ($model) {

            $lab_tests = (array) ($model->lab_tests ?? []);
            $lab_tests[] = $newItemToAppend;
            $model->lab_tests = $lab_tests;
            $model->save();
        } else {
            MedicalRecord::create([
                'patient_id' => $patient_id,
                'descriptions' => [],
                'lab_tests' => [$newItemToAppend]
            ]);
        }
        return redirect()->route("patient.view_medical_record", $patient_id);
    }
    public function view_outer_medcins()
    {
        return Inertia::render("Patient/ShowOuterDescriptions", ['patient' => Patient::with(['user', 'outer_descs'])->where('user_id', Auth::id())->first()]);
    }
    public function save_outer_medcins(OuterDescription $outer_med)
    {
        $pat_id = $outer_med->patient_id;
        $newItemToAppend = ['disease' => $outer_med->disease, 'medcines' => $outer_med->medcines, 'out_hospital' => true, 'date' => $outer_med->created_at, 'doctor_name' => $outer_med->doctor_name];
        $model = MedicalRecord::where('patient_id', $outer_med->patient_id)->first();
        if ($model) {

            $descriptions = (array) ($model->descriptions ?? []);
            $descriptions[] = $newItemToAppend;
            $model->descriptions = $descriptions;
            $model->save();
        } else {
            MedicalRecord::create([
                'patient_id' => $outer_med->patient_id,
                'descriptions' => [$newItemToAppend],
                'lab_tests' => []
            ]);
        }
        $outer_med->delete();
        return redirect()->route('patient.view_medical_record', $pat_id);
    }
}
