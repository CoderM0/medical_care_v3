<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\BusinessHoure;
use App\Models\Complaint;
use App\Models\Department;
use App\Models\Doctor;
use App\Models\Employee;
use App\Models\Inventory;
use App\Models\JobDescription;
use App\Models\Laboratory;
use App\Models\Nurse;
use App\Models\OrdinaryEmployee;
use App\Models\Patient;
use App\Models\Pharma;
use App\Models\SafeRecord;
use App\Models\SalaryRecords;
use App\Models\Specialty;
use App\Models\User;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Storage;
use Illuminate\Validation\Rules\Password;
use Inertia\Inertia;

use function Pest\Laravel\delete;

class AdminController extends Controller
{
    public function index()
    {
        $docs = Doctor::count();
        $nurse = Nurse::count();
        $pharmas = Pharma::count();
        $ptients = Patient::count();
        $labs = Laboratory::count();
        $nums = ['docs' => $docs, 'nurse' => $nurse, 'pharmas' => $pharmas, 'ptients' => $ptients, 'labs' => $labs];

        return Inertia::render("Admin/AdminDashboard", ['nums' => $nums]);
    }
    public function add_employee()
    {

        return Inertia::render("Admin/Employees/AddEmployee", ['departments' => Department::all(), 'specialities' => Specialty::all(), 'jobs' => JobDescription::all()]);
    }
    public function add_department()
    {
        return Inertia::render("Admin/Employees/AddDepartment", ['departments' => Department::all(), 'specialities' => Specialty::all(), 'jobs' => JobDescription::all()]);
    }
    public function store_dep()
    {
        $validated = request()->validate([
            'title' => 'required',
            'description' => 'required',
            'department_img' => 'required|image',
        ]);
        $dep_img = request()->file("department_img");
        $dep_img_path = Storage::disk("public")->put("departments/", $dep_img);

        Department::create([
            'title' => $validated['title'],
            'description' => $validated['description'],
            'department_img' => $dep_img_path
        ]);
        return redirect()->back();
    }
    public function store_specialty()
    {
        $validated = request()->validate([
            'title' => 'required|unique:specialties,title,NULL,id,type,' . request()->input('type'),
            'type' => 'required'
        ]);
        Specialty::create([
            'title' => $validated['title'],
            'type' => $validated['type']
        ]);
        return redirect()->back();
    }



    //store employee
    public function store_employee()
    {

        request()->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|lowercase|email|max:255|unique:' . User::class,
            'password' => ['required', Password::defaults()],
            'department_id' => 'required',
            'license' => 'required',
            'specialty_id' => 'required',
            'imgfile' => "image|required",
            'bio' => 'required',
            'salary' => 'required|gt:0',
            'job_id' => 'required|exists:job_descriptions,job_id',
            'address' => 'required',
            'contact' => 'required'
        ]);

        $user = User::create([
            'name' => request()->name,
            'email' => request()->email,
            'role' => request()->job_id,
            'password' => Hash::make(request()->password)
        ]);

        $avatar = request()->file("imgfile");
        $avatar = Storage::disk('public')->put('employees/', $avatar);

        $employee = Employee::create([
            'name' => request()->name,
            'user_id' => $user->id,
            'specialty_id' => request()->specialty_id,
            'job_description_id' => request()->job_id,
            'contact' => request()->contact,
            'avatar' => $avatar,
            'address' => request()->address,
            'license' => request()->license,
            'bio' => request()->bio,
            'salary' => request()->salary,
            'department_id' => request()->department_id
        ]);
        if (request()->job_id == 1) {
            $doc = Doctor::create([
                "employee_id" => $employee->id,
            ]);
            $days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
            foreach ($days as $day) {

                BusinessHoure::query()->updateOrCreate(['doctor_id' => $doc->id, 'day' => $day], ["from" => "09:00", "to" => "17:00", "step" => 30]);
            }
        } else if (request()->job_id == 2) {
            Nurse::create([
                "employee_id" => $employee->id,
            ]);
        } else if (request()->job_id == 3) {
            Pharma::create([
                "employee_id" => $employee->id,
            ]);
        } else {

            Laboratory::create([
                "employee_id" => $employee->id,
            ]);
        }
        return redirect()->back();
    }

    public function manage_employee()
    {
        return Inertia::render("Admin/Employees/Management", ['employees' => Employee::with(['user', 'department', 'specialty', 'job_description'])->get(), 'jobs' => JobDescription::all()]);
    }

    public function delete_employee(Employee $employee)
    {
        $user = $employee->user;
        Storage::disk('public')->delete("$employee->avatar");
        $user->delete();
        return redirect(route('admin.manage_employees'));
    }
    public function view_employee($employee)
    {
        $employee = Employee::with(['job_description', 'department', 'specialty', 'user'])->find($employee);
        return Inertia::render("Admin/Employees/ViewEmployee", ['employee' => $employee]);
    }
    public function edit_employee($employee)
    {
        $employee = Employee::with('job_description')->find($employee);
        return Inertia::render("Admin/Employees/EditEmployee", ['employee' => $employee, 'departments' => Department::all(), 'specialities' => Specialty::all(), 'jobs' => JobDescription::all()]);
    }
    public function update_employee(Employee $employee)
    {

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

    public function manage_patients()
    {
        return Inertia::render("Admin/Patients/ManagePatients", ['patients' => Patient::with("user")->get()]);
    }
    public function delete_patient(Patient $patient)
    {
        $user = User::find($patient->user_id);
        $user->delete();
        return redirect()->back();
    }
    public function delete_specialty($specialty_id)
    {
        $users = User::with('employee')->whereIn('role', [1, 2, 3, 5])->get();
        $specialty = Specialty::find($specialty_id);
        $specId = $specialty->id;
        $specialty->delete();
        $generalspec = Specialty::where("type", "الجميع")->first();

        foreach ($users as $user) {

            if ($user->employee->specialty_id == $specId) {

                $user->employee->specialty_id = $generalspec->id;

                $user->employee->save();
            }
        }

        return redirect()->back();
    }
    public function delete_department(Department $department)
    {
        $users = User::with('employee')->whereIn('role', [1, 2, 3, 5])->get();

        $depId = $department->id;
        Storage::disk("public")->delete($department->department_img);
        $department->delete();
        $generalDep = Department::where("title", "عام")->first();

        foreach ($users as $user) {

            if ($user->employee->department_id == $depId) {

                $user->employee->department_id = $generalDep->id;

                $user->employee->save();
            }
        }

        return redirect()->back();
    }
    public  function view_inventory()
    {
        return Inertia::render('Admin/Inventory/Index', ['inv' => Inventory::all()]);
    }
    public  function safe_records()
    {
        return Inertia::render('Admin/Records/SafeRecords', ['safe_records' => SafeRecord::with(['employee', 'employee.user'])->get()]);
    }
    public  function salary_records()
    {
        return Inertia::render('Admin/Records/salaryRecords', ['salary_records' => SalaryRecords::with(['employee', 'employee.user'])->get()]);
    }
    public function view_my_profile(Request $request)
    {
        return Inertia::render("Admin/AdminProfile", [
            'mustVerifyEmail' => $request->user() instanceof MustVerifyEmail,
            'status' => session('status')
        ]);
    }
}
