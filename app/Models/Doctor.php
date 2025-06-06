<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Doctor extends Model
{
    protected $guarded=[];
    public function employee(){
        return $this->belongsTo(Employee::class);
    }
    public function appointments(){
        return $this->hasMany(Appointment::class);
       }
}
