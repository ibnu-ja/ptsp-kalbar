 <?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePermohonansTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('permohonans', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id')->nullable();
            $table->string('status')->nullable();
            $table->string('no_surat_masuk')->nullable();
            $table->string('tanda_terima')->nullable();
            $table->string('keterangan')->nullable();
            $table->string('pemohon')->nullable();
            $table->unsignedBigInteger('pelayanans_id')->nullable();
            $table->foreign('user_id')->references('id')->on('users');
            $table->foreign('pelayanans_id')->references('id')->on('layanans');
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
        Schema::dropIfExists('permohonans');
    }
}
