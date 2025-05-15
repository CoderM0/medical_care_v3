<?php

namespace App\Http\Controllers;

use App\Models\Department;
use App\Models\Employee;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class EmployeeController extends Controller
{
    public function view_profile()
    {
        $employee = Employee::with(['specialty', 'department', 'user'])->where('user_id', Auth::id())->first();
        if (!$employee) {
            return redirect()->route("patient.dashboard");
        }
        return Inertia::render('Auth/ViewEmpProfile', ['employee' => $employee]);
    }
    public function edit_profile()
    {
        $employee = Employee::with(['specialty', 'department', 'user', 'job_description'])->where('user_id', Auth::id())->first();
        if (!$employee) {
            return redirect()->route("patient.dashboard");
        }
        return Inertia::render('Auth/EditEmpProfile', ['employee' => $employee, 'departments' => Department::all()]);
    }
    public function update_profile()
    {
        $employee = Employee::with(['specialty', 'department', 'user', 'job_description'])->where('user_id', Auth::id())->first();
        if (!$employee) {
            return redirect()->route("patient.dashboard");
        }
        $validateddata = request()->validate([
            'name' => 'string|max:255',
            'department_id' => 'sometimes|exists:departments,id',
            'license' => 'sometimes',
            'bio' => 'sometimes',
            'address' => 'sometimes',
            'salary' => 'sometimes|gt:0',
            'contact' => 'sometimes'
        ]);

        if (request()->file("imgfile")) {
            Storage::disk('public')->delete($employee->avatar);
            $newavatar = Storage::disk('public')->put("employees/", request()->file('imgfile'));
            $employee->avatar = $newavatar;
            $employee->save();
        }
        $user = $employee->user;

        $user->name = $validateddata['name'];
        $user->save();

        $employee->update($validateddata);

        return redirect()->back();
    }
}
