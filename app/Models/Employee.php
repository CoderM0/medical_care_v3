<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Employee extends Model
{
    protected $guarded=[];
    public function user(){
        return $this->belongsTo(User::class);
    }
    public function doctor(){
        return $this->hasOne(Doctor::class);
    }
    public function nurse(){
        return $this->hasOne(Nurse::class);
    }
    public function pharma(){
        return $this->hasOne(Pharma::class);
    }
    public function ordinary(){
        return $this->hasOne(OrdinaryEmployee::class);
    }
    public function department(){
        return $this->belongsTo(Department::class);
    }
    public function specialty(){
        return $this->belongsTo(Specialty::class);
    }
    public function job_description(){
        return $this->belongsTo(JobDescription::class);
    }
}
