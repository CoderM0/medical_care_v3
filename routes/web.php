<?php

use App\Http\Controllers\Accountant\AccountantController;
use App\Http\Controllers\Admin\AdminController;
use App\Http\Controllers\Admin\InventoryManagementController;
use App\Http\Controllers\AppiontmentController;
use App\Http\Controllers\ComplaintController;
use App\Http\Controllers\Doctor\BusinessHourController;
use App\Http\Controllers\Doctor\DoctorController;
use App\Http\Controllers\EmployeeController;
use App\Http\Controllers\Lab\LaboratoryController;
use App\Http\Controllers\Patient\PatientController;
use App\Http\Controllers\Pharma\PharmaController;
use App\Http\Controllers\ProfileController;
use App\Models\Complaint;
use App\Models\Employee;
use App\Models\Task;
use App\Models\User;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return redirect()->route("doctor.dashboard");
    // return Inertia::render('Dashboard');
})->middleware(['auth'])->name('dashboard');
Route::controller(AdminController::class)->middleware(['auth', 'rolemanager:admin'])->prefix("admin")->group(function () {
    Route::get('/dashboard', 'index')->name("admin.dashboard");
    Route::get('/patients/manage', 'manage_patients')->name("admin.manage_patients");
    Route::delete('/patients/{patient}/delete', 'delete_patient')->name("admin.delete_patient");
    Route::get('/add/employee', 'add_employee')->name("admin.add_employee");
    Route::post('/store/employee', 'store_employee')->name("admin.store_employee");
    Route::get('/add/department', 'add_department')->name("admin.add_department");
    Route::post('/store/department', 'store_dep')->name("admin.store_dep");
    Route::post('/store/specialty', 'store_specialty')->name("admin.store_specialty");
    Route::delete('/specialty/{specialty}/delete', 'delete_specialty')->name("admin.delete_specialty");
    Route::delete('/department/{department}/delete', 'delete_department')->name("admin.delete_department");

    Route::get('/complaints/view', [ComplaintController::class, 'view_complaints'])->name("admin.complaints");
    Route::delete('/complaints/{comp}/delete', [ComplaintController::class, 'delete_complaint'])->name("admin.complaint.delete");
    //
    Route::get('/manage/employee', 'manage_employee')->name("admin.manage_employees");

    Route::get('/manage/employee/{employee}/view', 'view_employee')->name("admin.manage_employees.show");
    Route::get('/manage/employee/{employee}/edit', 'edit_employee')->name("admin.manage_employees.edit_employee");
    Route::delete('/manage/employees/{employee}/delete', 'delete_employee')->name("admin.manage_employees.delete_employee");
    Route::post('/manage/employees/{employee}/update', 'update_employee')->name("admin.manage.update_employee");
    Route::get('/inventory', 'view_inventory')->name('admin.inventory.index');
    Route::get('/records/safe', 'safe_records')->name('admin.safe.index');
    Route::get('/records/salary', 'salary_records')->name('admin.salary.index');
    // Route::controller(InventoryManagementController::class)->prefix("inventory")->group(function(){
    //     Route::get("/add",'add')->name("admin.add_to_inventory");
    //     Route::post("/store",'store_item')->name("admin.inventory.store");
    //     Route::get("/manage",'manage_inventory')->name("admin.inventory.manage");
    //     Route::get("/manage/{id}/edit",'edit_item')->name("admin.inventory.edit");
    //     Route::put("/manage/{id}/update",'update_item')->name("admin.inventory.update");
    //     Route::delete("/manage/{id}/delete",'delete_item')->name("admin.inventory.delete");
    // });

});
Route::middleware(['auth', 'rolemanager:doctor'])->prefix("doctor")->group(function () {
    Route::controller(DoctorController::class)->group(function () {
        Route::get('/dashboard', 'index')->name("doctor.dashboard");
        Route::get('/add-task', 'add_task')->name("doctor.add_task");
        Route::post('/save-task', 'save_task')->name("doctor.save_task");
        Route::get('/add-decription/{patient_id}', 'add_description')->name("doctor.add_description");
        Route::post('/save-decription/{patient_id}', 'save_description')->name("doctor.save_description");
        Route::get('/add-lab/{patient_id}', 'add_lab_test')->name("doctor.add_lab_test");
        Route::post('/save-lab/{patient_id}', 'save_lab_test')->name("doctor.save_lab_test");
        Route::get('/medical-record/{patient_id}', 'show_medical_record')->name("doctor.show_medical_record");
        Route::get('/appointment/ended', 'ended_appointment')->name("doctor.ended_appointments");
        Route::put('/appointment/{appointment}/end', 'end_appointment')->name("doctor.end_appointment");
        Route::delete('/appointment/{appointment}/delete', 'delete_appointment')->name("doctor.ended_appointment.delete");
    });
    Route::controller(BusinessHourController::class)->prefix('/businesshours')->group(function () {
        Route::post('/update', 'update_table')->name('doctor.businesstable.update');

        Route::get('/{doctor_id}/show', 'index')->name('doctor.business.index');
    });
});

Route::middleware(['auth', 'rolemanager:laboratory'])->prefix("lab")->controller(LaboratoryController::class)->group(function () {
    Route::get('/dashboard', 'index')->name("laboratory.dashboard");
    Route::post('/check_lab_test/{lab_id}', 'check_lab_test')->name("laboratory.check_lab_test");
});
//employee profile
Route::middleware('auth')->controller(EmployeeController::class)->group(function () {
    Route::get("employee/profile/view", "view_profile")->name("employee.profile.view");
    Route::get("employee/profile/edit", "edit_profile")->name("employee.profile.edit");
    Route::post("employee/profile/update", "update_profile")->name("employee.profile.update");
});



//
Route::middleware(['auth', 'rolemanager:patient'])->prefix("patient")->group(function () {
    Route::controller(PatientController::class)->group(function () {
        Route::get("/dashboard", 'index')->name("patient.dashboard");
        Route::get("/profile/view", 'view_profile')->name("patient.profile.view");
        Route::get("/profile/edit", 'edit_profile')->name("patient.profile.edit");
        Route::post("/profile/update", 'update_profile')->name("patient.profile.update");
        Route::get("/departments/{department_id}", 'view_dep')->name("patient.viewDep");
        Route::get("/view/doctor/{employee_id}", 'view_doctor_profile')->name("patient.view_doc");
        Route::get("/view/patient/{patient_id}", 'show_medical_record')->name("patient.view_medical_record");
        Route::get("/medicalrecord/add", 'add_to_medical_record')->name("patient.add_to_medical_record");
        Route::get("/view/appointments", 'view_patient_appointments')->name("patient.view_appointments");
        Route::get("/view/descriptions/medcines/outer", 'view_outer_medcins')->name("patient.view_outer_medcins");
        Route::post("/view/descriptions/medcines/outer/{outer_med}", 'save_outer_medcins')->name("patient.save_outer_medcins");
        Route::post("/saveouterdesc/{patient_id}", 'save_outerdescription')->name("patient.save_outerdescription");
        Route::post("/saveouterlabtest/{patient_id}", 'save_outer_lab_test')->name("patient.save_outer_lab_test");
        Route::controller(ComplaintController::class)->group(function () {
            Route::get("/complaint/add", 'add_complaint')->name("patient.add_complaint");
            Route::post("/complaint/save", 'save_complaint')->name("patient.save_complaint");
        });
    });

    Route::controller(AppiontmentController::class)->prefix('/appiontment')->group(function () {
        Route::get('/doctor/{doctor_id}', 'index')->name('patient.appointment.index');
        Route::post('/reserve', 'reserve_appointment')->name('patient.appointment.reserve');
        Route::delete('/appointment/{appointment}/cancel', 'delete_appointment')->name('patient.appointment.cancel');
    });
});


//



Route::get('/nurse/dashboard', function () {
    return Inertia::render("Nurse/NurseDashboard", ['tasks' => Task::where('employee_id', Auth::user()->employee->id)->get(), 'employee' => Employee::where('user_id', Auth::id())->first()]);
})->middleware(['auth', 'rolemanager:nurse'])->name("nurse.dashboard");
Route::post('/nurse/task/{task_id}', function ($task_id) {
    $task = Task::find($task_id);
    $task->delete();
    return redirect()->back();
})->middleware(['auth', 'rolemanager:nurse'])->name("nurse.do_task");


//////pharma
Route::middleware(['auth', 'rolemanager:pharma'])->controller(PharmaController::class)->prefix('pharma')->group(function () {
    Route::get('/dashboard', 'index')->name("pharma.dashboard");
    Route::post('/check-med-desc/{med_desc_id}', 'check_medcical_desc')->name("pharma.check_medcical_desc");
    Route::get('/inventory', 'inventory')->name("pharma.inventory");
    Route::get('/inventory/add', 'add_to_inventory')->name("pharma.inventory.add");
    Route::post('/inventory/store', 'store_item')->name("pharma.inventory.store");
    Route::get('/inventory/{id}/edit', 'edit_item')->name("pharma.inventory.edit");
    Route::put('/inventory/{id}/update', 'update_item')->name("pharma.inventory.update");
    Route::delete('/inventory/{id}/delete', 'delete_item')->name("pharma.inventory.delete");
});

//accountant
Route::middleware(['auth', 'rolemanager:accountant'])->controller(AccountantController::class)->prefix('accountant')->group(function () {
    Route::get('/dashboard', 'index')->name("accountant.dashboard");
    Route::post('/payments/{employee}/pay', 'pay')->name('accountant.payments.pay');
    Route::get('/safe/index', 'view_safe')->name('accountant.safe.index');
    Route::get('/safe/records', 'safe_records')->name('accountant.safe.records');
    Route::post('/safe/deposite', 'deposite')->name('accountant.safe.deposite');
    Route::post('/safe/withdraw', 'withdraw')->name('accountant.safe.withdraw');
    //
    Route::get('/salaries/records', 'salary_records')->name('accountant.salary.records');
});

///
Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
