<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->increments('id');
						$table->string('name');
						$table->string('username')->nullable();
						$table->date('dob')->nullable();						
            $table->string('email')->unique();
						$table->string('password');
						$table->enum('role',['user','moderator','admin','super'])->default('user');
						$table->boolean('status')->default(false);						
            $table->rememberToken();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}
