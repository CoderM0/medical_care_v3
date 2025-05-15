<?php

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
        Schema::create('patients', function (Blueprint $table) {
            $table->id();
            $table->string("name");
            $table->string("birth");
            $table->string("gender");
            $table->string("avatar");
            $table->string("additional_case");
            $table->string("blood_type");
            $table->foreignIdFor(User::class)->constrained()->cascadeOnDelete();
            $table->boolean("active")->default(false);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('patients');
    }
};
