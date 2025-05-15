<?php

namespace App\Console\Commands;

use App\Models\Employee;
use Carbon\Carbon;
use Illuminate\Console\Command;

class PreparePaymentList extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:prepare-payment-list';

    /**
     * The console command description.
     *
     * @var string
     */
  protected $description = 'Prepares the monthly payment list for the accountant.';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $this->info('Preparing the monthly payment list...');

        $currentMonthStart = Carbon::now()->startOfMonth()->toDateString();

        // Optionally reset a flag or create a temporary table if needed
        // For this example, we'll rely on 'last_paid_month'

        $employeesToPay = Employee::where(function ($query) use ($currentMonthStart) {
            $query->whereNull('last_paid_month')
                  ->orWhere('last_paid_month', '<', $currentMonthStart);
        })->get();

        // You might want to store these in a way the web page can easily access,
        // perhaps by updating a status on the employee model or using a session.
        // For simplicity in this command, we'll just log them.
        if ($employeesToPay->isNotEmpty()) {
            $this->info('Employees to be paid for ' . Carbon::now()->format('F Y') . ':');
            foreach ($employeesToPay as $employee) {
                $this->line("- {$employee->name} (Salary: {$employee->salary})");
            }
        } else {
            $this->info('No employees found to prepare for payment this month.');
        }

        $this->info('Payment list preparation completed.');

    }
}
