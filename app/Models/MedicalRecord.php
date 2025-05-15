<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class MedicalRecord extends Model
{
    protected $guarded=[];
    protected $casts=[
        'descriptions'=>'array',
        'lab_tests'=>'array',
    ];
    public function patient(){
        return $this->belongsTo(Patient::class);
    }
    public function doctor(){
        return $this->belongsTo(Doctor::class);
    }

}
