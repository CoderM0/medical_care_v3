<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class MedicalDescription extends Model
{
    protected $guarded=[];
    protected $casts=[
        'medcines'=>'array'
    ];
    public function patient(){
        return $this->belongsTo(Patient::class);
    }
    public function doctor(){
        return $this->belongsTo(Doctor::class);
    }
}
