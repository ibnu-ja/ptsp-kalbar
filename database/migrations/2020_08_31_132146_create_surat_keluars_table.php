<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSuratKeluarsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('surat_keluars', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id')->nullable();
            $table->bigInteger('nomor_urut_biasa')->nullable();
            $table->bigInteger('nomor_urut_sk')->nullable();
            $table->bigInteger('nomor_urut_spd')->nullable();
            $table->string('nomor_surat');
            $table->tinyInteger('jenis');
            $table->string('isi');
            $table->date('tgl_surat');
            $table->string('asal');
            $table->string('tujuan');
            $table->string('kode_satker');
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');;
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
        Schema::dropIfExists('surat_keluars');
    }
}
