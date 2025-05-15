<?php

namespace App\Http\Controllers\Lab;

use App\Http\Controllers\Controller;
use App\Models\Employee;
use App\Models\LabTest;
use App\Models\MedicalRecord;
use App\Models\Safe;
use App\Models\SafeRecord;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class LaboratoryController extends Controller
{
    public function index()
    {
        return Inertia::render("Laboratory/LabDashboard", ['employee' => Employee::where('user_id', Auth::id())->first(), 'lab_tests' => LabTest::with(['patient', 'doctor', 'doctor.employee'])->get()]);
    }
    public function check_lab_test($lab_id)
    {

        request()->validate([
            'lab_test_result' => 'required',
            'total_cost' => 'required|gt:0',
        ]);
        $total_cost = request()->total_cost;
        $lab = LabTest::with(["doctor", 'doctor.employee'])->find($lab_id);

        $newItemToAppend = ['lab_test_description' => $lab->lab_test_description, 'lab_test_result' => request()->lab_test_result, "out_hospital" => false, 'date' => $lab->created_at, 'doctor_name' => $lab->doctor->employee->name];
        $model = MedicalRecord::where('patient_id', $lab->patient_id)->first();
        if ($model) {

            $lab_tests = (array) ($model->lab_tests ?? []);
            $lab_tests[] = $newItemToAppend;
            $model->lab_tests = $lab_tests;
            $model->save();
        } else {
            MedicalRecord::create([
                'patient_id' => $lab->patient_id,
                'descriptions' => [],
                'doctor_id' => $lab->doctor_id,
                'lab_tests' => [$newItemToAppend]
            ]);
        }
        DB::transaction(function () use ($total_cost) {
            $safe = Safe::lockForUpdate()->firstOrFail();
            $safe->increment('current_amount', $total_cost);
            SafeRecord::create([
                'employee_id' => Employee::where('user_id', Auth::id())->first()->id,
                'operation' => 'ايداع',
                'amount' => $total_cost,
                'purpose' => "ثمن تحليل طبي",
            ]);
        });

        $lab->delete();
        return redirect()->route("laboratory.dashboard");
    }
}
