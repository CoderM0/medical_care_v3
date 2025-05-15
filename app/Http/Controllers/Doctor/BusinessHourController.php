<?php

namespace App\Http\Controllers\Doctor;

use App\Http\Controllers\Controller;
use App\Models\BusinessHoure;
use App\Models\Employee;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class BusinessHourController extends Controller
{
    public function index($doctor_id){
        $bh=BusinessHoure::where('doctor_id',$doctor_id)->get();
        //   Employee::where('user_id',Auth::id())->first();

        return Inertia::render("Doctor/BusinessHouer",['businesshoures'=>$bh ,'employee'=>Employee::with('doctor')->where('user_id',Auth::id())->first()]);
    }
    public function update_table(){
        $data=array_values(request()->all()['data']);

        BusinessHoure::upsert($data,["doctor_id","day"]);
      return redirect()->route("doctor.dashboard");
    }
}
