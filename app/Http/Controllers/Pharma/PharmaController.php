<?php

namespace App\Http\Controllers\Pharma;

use App\Http\Controllers\Controller;
use App\Models\Employee;
use App\Models\Inventory;
use App\Models\MedicalDescription;
use App\Models\MedicalRecord;
use App\Models\Safe;
use App\Models\SafeRecord;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class PharmaController extends Controller
{
    public function index()
    {
        return Inertia::render("Pharma/PharmaDashboard", ['employee' => Employee::with('pharma')->where('user_id', Auth::id())->first(), 'medical_descs' => MedicalDescription::with('patient')->get()]);
    }
    public function inventory()
    {
        return Inertia::render("Pharma/Inventory", ['inventory' => Inventory::all(), 'employee' => Employee::with('pharma')->where('user_id', Auth::id())->first()]);
    }
    public function add_to_inventory()
    {
        return Inertia::render("Pharma/AddToInventory", ['employee' => Employee::with('pharma')->where('user_id', Auth::id())->first()]);
    }
    public function store_item()
    {

        $validated = request()->validate([
            'title' => 'required',
            'company' => 'required',
            'quantity' => 'required|gt:0',
            'unite_price' => 'required',
            'pro_date' => 'required|date',
            'exp_date' => 'required|date',
        ]);
        //
        $cost = request()->quantity * request()->unite_price;
        return  DB::transaction(function () use ($cost, $validated) {
            $safe = Safe::lockForUpdate()->firstOrFail();
            if ($safe->current_amount >= $cost) {
                $safe->decrement('current_amount', $cost);

                SafeRecord::create([
                    'employee_id' => Employee::where('user_id', Auth::id())->first()->id,
                    'operation' => 'سحب',
                    'amount' => $cost,
                    'purpose' => 'شراء ادوية لصيدلية المشفى',
                ]);
                Inventory::create($validated);

                return redirect()->route('pharma.inventory');
            } else {
                return redirect()->back()->withErrors('no money');
            }
            //

        });
    }
    public function edit_item(Inventory $id)
    {
        return Inertia::render("Pharma/EditItem", ['inv' => $id, 'employee' => Employee::with('pharma')->where('user_id', Auth::id())->first()]);
    }
    public function update_item(Inventory $id)
    {
        $validated = request()->validate([
            'title' => 'sometimes',
            'company' => 'sometimes',
            'quantity' => 'sometimes',
            'unite_price' => 'sometimes',
            'pro_date' => 'sometimes|date',
            'exp_date' => 'sometimes|date',
        ]);
        if (request()->quantity > $id->quantity) {
            DB::transaction(function () use ($id, $validated) {
                $safe = Safe::lockForUpdate()->firstOrFail();
                $cost = request()->unite_price * (request()->quantity - $id->quantity);
                if ($safe->current_amount >= $cost) {
                    $safe->decrement('current_amount', $cost);

                    SafeRecord::create([
                        'employee_id' => Employee::where('user_id', Auth::id())->first()->id,
                        'operation' => 'سحب',
                        'amount' => $cost,
                        'purpose' => 'شراء ادوية لصيدلية المشفى',
                    ]);
                    $id->update($validated);


                    return redirect()->route('pharma.inventory');
                } else {
                    return redirect()->back()->withErrors('no money');
                }
            });
        } else {
            $id->update($validated);
            return redirect()->route('pharma.inventory');
        }
    }
    public function delete_item(Inventory $id)
    {
        $id->delete();
        return redirect()->back();
    }
    public function check_medcical_desc($med_desc_id)
    {
        $md = MedicalDescription::with(["doctor", 'doctor.employee'])->find($med_desc_id);
        $total_cost = 0;

        foreach ($md->medcines as  $val) {
            $inv =  Inventory::where('title', $val["medcine_name"])->first();
            $inv->quantity  =    $inv->quantity - $val['quantity'];
            $inv->update();
            $total_cost += $val['quantity'] * $inv->unite_price;
        }
        $newItemToAppend = ['disease' => $md->disease, 'medcines' => $md->medcines, 'out_hospital' => false, 'date' => $md->created_at, 'doctor_name' => $md->doctor->employee->name];
        $model = MedicalRecord::where('patient_id', $md->patient_id)->first();
        if ($model) {

            $descriptions = (array) ($model->descriptions ?? []);
            $descriptions[] = $newItemToAppend;
            $model->descriptions = $descriptions;
            $model->save();
        } else {
            MedicalRecord::create([
                'patient_id' => $md->patient_id,
                'descriptions' => [$newItemToAppend],
                'lab_tests' => []
            ]);
        }
        DB::transaction(function () use ($total_cost) {
            $safe = Safe::lockForUpdate()->firstOrFail();
            $safe->increment('current_amount', $total_cost);
            SafeRecord::create([
                'employee_id' => Employee::where('user_id', Auth::id())->first()->id,
                'operation' => 'ايداع',
                'amount' => $total_cost,
                'purpose' => "صرف وصفة طبية",
            ]);
        });
        $md->delete();
        return redirect()->route("pharma.dashboard");
    }
}
