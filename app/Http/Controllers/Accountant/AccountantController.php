<?php

namespace App\Http\Controllers\Accountant;

use App\Http\Controllers\Controller;
use App\Models\Employee;
use App\Models\JobDescription;
use App\Models\Safe;
use App\Models\SafeRecord;
use App\Models\SalaryRecords;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class AccountantController extends Controller
{
    public function index(){
         $currentMonthStart = Carbon::now()->startOfMonth()->toDateString();
        $employeesToPay = Employee::with(['user','department','specialty','job_description'])->where(function ($query) use ($currentMonthStart) {
            $query->whereNull('last_paid_month')
                  ->orWhere('last_paid_month', '<', $currentMonthStart);
        })->get();
        return Inertia::render("Accountant/AccountantDashboard",['employees_to_pay'=>$employeesToPay ,'jobs'=>JobDescription::all()]);
    }

    public function safe_records(){
        return Inertia::render("Accountant/SafeRecords",['records'=>SafeRecord::with(['employee','employee.user'])->get()]);
    }
  public function pay(Employee $employee)
    {
        // Use database transactions for atomicity
        return DB::transaction(function () use ($employee) {
            $safe = Safe::lockForUpdate()->firstOrFail(); // Assuming only one row in 'safe'

            if ($safe->current_amount >= $employee->salary) {
                $safe->decrement('current_amount', $employee->salary);

                SalaryRecords::create([
                    'employee_id' => $employee->id,
                    'amount_paid' => $employee->salary,
                    'payment_date' => now()->toDateString(),
                ]);
                SafeRecord::create([
                     'employee_id' =>Employee::where('user_id',Auth::id())->first()->id,
                     'operation'=>'سحب',
                     'amount'=>$employee->salary,
                     'purpose'=>"دفع راتب الموظف $employee->name"
                ]);

                $employee->update(['last_paid_month' => now()->startOfMonth()->toDateString()]);


                return redirect()->back();
            }else{

                  return redirect()->back()->withErrors('no money');
            }
        });
    }

    public function view_safe(){
        return Inertia::render("Accountant/ViewSafe",['safe'=>Safe::first(),'employee'=>Employee::with('user')->where('user_id',Auth::id())->first()]);
    }
     public function deposite(){
        request()->validate([
            'deposite_amount'=>'required|gt:0',
            'purpose'=>'required'
        ]);
      return  DB::transaction(function (){
            $safe = Safe::lockForUpdate()->firstOrFail();
             $safe->increment('current_amount', request()->deposite_amount);
               SafeRecord::create([
                     'employee_id' =>Employee::where('user_id',Auth::id())->first()->id,
                     'operation'=>'ايداع',
                     'amount'=>request()->deposite_amount,
                     'purpose'=>request()->purpose,
                ]);
             return redirect()->back();

        });

    }

 public function withdraw(){
     request()->validate([
            'withdraw_amount'=>'required|gt:0',
            'purpose'=>'required'
        ]);
         return  DB::transaction(function (){
            $safe = Safe::lockForUpdate()->firstOrFail();
               if ($safe->current_amount >= request()->withdraw_amount) {
             $safe->decrement('current_amount', request()->withdraw_amount);
               SafeRecord::create([
                     'employee_id' =>Employee::where('user_id',Auth::id())->first()->id,
                     'operation'=>'سحب',
                     'amount'=>request()->withdraw_amount,
                     'purpose'=>request()->purpose,
                ]);
             return redirect()->back();
            }else{
             return redirect()->back()->withErrors('no money');

            }
        });
 }
 public function salary_records(){
    return Inertia::render("Accountant/SalaryRecords",['salary_records'=>SalaryRecords::with(['employee','employee.user'])->get()]);
 }
}
