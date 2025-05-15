<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Appointment extends Model
{
   protected $guarded=[];
   protected $casts=[
    'time'=>'datetime'
   ];
   public function patient(){
    return $this->belongsTo(Patient::class);
   }
   public function doctor(){
    return $this->belongsTo(Doctor::class);
   }
}
