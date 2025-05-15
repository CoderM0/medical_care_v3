<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

class Patient extends Model
{
    protected $appends = ['age'];
    protected $guarded = [];
    public function appointments()
    {
        return $this->hasMany(Appointment::class);
    }
    public function user()
    {
        return $this->belongsTo(User::class);
    }
    public function getAgeAttribute()
    {
        if ($this->birth) {

            return Carbon::parse($this->birth)->age;
        }
    }
    public function complaints()
    {
        return $this->hasMany(Complaint::class);
    }
    public function outer_descs()
    {
        return $this->hasMany(OuterDescription::class);
    }
}
