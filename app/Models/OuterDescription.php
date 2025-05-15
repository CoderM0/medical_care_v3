<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class OuterDescription extends Model
{
    protected $guarded = [];
    public function patient()
    {
        return $this->belongsTo(Patient::class);
    }
    protected $casts = [
        'medcines' => 'array'
    ];
}
