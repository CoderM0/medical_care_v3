<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Employee;
use App\Models\Inventory;
use App\Models\Safe;
use App\Models\SafeRecord;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class InventoryManagementController extends Controller
{
   public function add(){
    return Inertia::render("Admin/Inventory/AddItem");
   }
   public function store_item(){

        $validated= request()->validate([
             'title'=>'required',
             'company'=>'required',
             'quantity'=>'required|gt:0',
             'unite_price'=>'required',
             'pro_date'=>'required|date',
             'exp_date'=>'required|date',
         ]);
    //
       $cost=request()->quantity * request()->unite_price;
       return  DB::transaction(function () use($cost,$validated) {
            $safe = Safe::lockForUpdate()->firstOrFail();
               if ($safe->current_amount >= $cost) {
             $safe->decrement('current_amount', $cost);

               SafeRecord::create([
                     'employee_id' => Employee::where('user_id',Auth::id())->first()->id,
                     'operation'=>'سحب',
                     'amount'=>request()->withdraw_amount,
                     'purpose'=>'شراء ادوية لصيدلية المشفى',
                ]);
             Inventory::create($validated);

                return redirect()->route('admin.inventory.manage');
            }else{
             return redirect()->back()->withErrors('no money');

            }
            //

   });
}
   public function manage_inventory(){
    return Inertia::render("Admin/Inventory/ManageInventory",['data'=>Inventory::all()]);
   }
   public function edit_item(Inventory $id){
    return Inertia::render("Admin/Inventory/EditItem",['inv'=>$id]);
 }
 public function update_item(Inventory $id){
     $validated= request()->validate([
         'title'=>'sometimes',
         'company'=>'sometimes',
         'quantity'=>'sometimes',
         'pro_date'=>'sometimes|date',
         'exp_date'=>'sometimes|date',
     ]);
     $id->update($validated);
     return redirect()->route('admin.inventory.manage');
  }
  public function delete_item(Inventory $id){
      $id->delete();
      return redirect()->back();
  }
}
