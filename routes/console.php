<?php

use Illuminate\Foundation\Inspiring;
use Illuminate\Support\Facades\Artisan;
use App\Console\Commands\PrunePastAppointments;

use Illuminate\Support\Facades\Schedule;

// Schedule::command(PrunePastAppointments::class)->everyTenMinutes();
Schedule::command('payments:prepare-list')->monthlyOn(1, '07:00');

Artisan::command('inspire', function () {
    $this->comment(Inspiring::quote());
})->purpose('Display an inspiring quote');
