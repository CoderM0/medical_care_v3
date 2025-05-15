<?php

namespace App\Http\Controllers;

use App\Models\Complaint;
use App\Models\Patient;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class ComplaintController extends Controller
{
    public function add_complaint(){
        return Inertia::render("Patient/AddComplaint",['patient'=>Patient::with('user')->where('user_id',Auth::id())->first()]);
    }
    public function save_complaint(){
       $validated= request()->validate([
            'nick_name'=>"required",
            'complaint'=>"required",
            'patient_id'=>"required",
        ]);
      Complaint::create($validated);

        return redirect()->back();
    }

    public function view_complaints(){
        return Inertia::render("Admin/ViewComplaints",['complaints'=>Complaint::all()]);
    }
    public function delete_complaint(Complaint $comp){
        $comp->delete();
        return redirect()->back();
    }
}
