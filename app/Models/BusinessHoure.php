<?php

namespace App\Models;

use Carbon\CarbonInterval;
use Illuminate\Database\Eloquent\Model;

class BusinessHoure extends Model
{
   protected $guarded=[];
   public function getTimesPeriodAttribute(){
    $times= CarbonInterval::minute($this->step)->toPeriod($this->from,$this->to)->toArray();
    return array_map(fn($time)=>$time->format("H:i"),$times);
}
}
