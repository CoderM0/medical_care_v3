<?php

use App\Models\Department;
use App\Models\JobDescription;
use App\Models\Specialty;
use App\Models\User;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('employees', function (Blueprint $table) {
            $table->id();
            $table->string("name");
            $table->string("contact");
            $table->foreignIdFor(Department::class);
            $table->foreignIdFor(JobDescription::class);
            $table->foreignIdFor(Specialty::class);
            $table->foreignIdFor(User::class)->constrained()->cascadeOnDelete();
            $table->string("avatar");
             $table->date('last_paid_month')->nullable()->index();
            $table->float("salary");
            $table->string("bio");
            $table->string("license");
            $table->string("address");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('employees');
    }
};
