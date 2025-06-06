<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class LabTest extends Model
{
   protected $guarded=[];

   public function patient(){
    return $this->belongsTo(Patient::class);
   }
   public function doctor(){
    return $this->belongsTo(Doctor::class);
   }
}
