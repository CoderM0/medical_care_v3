<?php

namespace Database\Seeders;

use App\Models\BusinessHoure;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class BusinessHoureSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
        foreach ($days as $day) {

           BusinessHoure::query()->updateOrCreate(['doctor_id'=>1,'day'=>$day],["from"=>"09:00","to"=>"17:00","step"=>30]);
        }
    }
}
