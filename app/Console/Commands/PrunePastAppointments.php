<?php

namespace App\Console\Commands;

use App\Models\Appointment;
use Carbon\Carbon;
use Illuminate\Console\Command;

class PrunePastAppointments extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:prune-past-appointments';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Delete appointments that have already passed.';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $now=Carbon::now();
        $deletedCount= Appointment::where('date','<',$now->toDateString())->orWhere(function ($query) use ($now) {
            $query->where('date', $now->toDateString())
                  ->where('time', '<=', $now->toTimeString());
        })
        ->delete();
        $this->info("Successfully pruned {$deletedCount} past appointments.");
    }
}
