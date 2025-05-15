<?php

namespace Database\Seeders;

use App\Models\Department;
use App\Models\JobDescription;
use App\Models\Safe;
use App\Models\Specialty;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();
    $job_descriptions=['1'=>'طبيب','2'=>'ممرض','3'=>'صيدلاني','5'=>'مخبري','6'=>'محاسب'];
    foreach ($job_descriptions as $id => $title) {
       JobDescription::create([
        'id'=>$id,
        'job_title'=>$title,
        'job_id'=>$id,
       ]);
    }
    User::create([
        'name'=>'admin',
        'email'=>'admin@gmail.com',
        'role'=>0,
        'password'=>Hash::make('12345678'),
    ]);
    Safe::create([
        'current_amount'=>0
    ]);
    Department::create([
        'title'=>'الطوارئ',
        'description'=>'تقدم خدمات اسعافية للمساعدة في احتواء الحالات الطارئة',
        'department_img'=>'departments//emerdep.png'
    ]);
    Department::create([
        'title'=>'عام',
        'description'=>'يقدم الرعاية الطبية العامة  ',
        'department_img'=>'departments//general.png'
    ]);
    $specialities=['(أذن,أنف,حنجرة)'=>'طبيب','لاشمانيا'=>'ممرض','خبير دوائي'=>'صيدلاني','جراثيم'=>'مخبري','عام'=>'الجميع'];

    foreach ($specialities as $title=> $type) {
   Specialty::create([
        'title'=>$title,
        'type'=>$type,
    ]);
    }


    }
}
