<?php

use App\Models\Doctor;
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
        Schema::create('business_houres', function (Blueprint $table) {
            $table->id();
            $table->string("day");
            $table->foreignIdFor(Doctor::class)->constrained()->cascadeOnDelete();
            $table->time("from");
            $table->time("to");
            $table->boolean("off")->default(false);
            $table->unsignedInteger("step")->default(60);
            $table->unique(['doctor_id', 'day']);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('business_houres');
    }
};
