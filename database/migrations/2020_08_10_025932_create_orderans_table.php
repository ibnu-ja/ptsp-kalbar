 <?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOrderansTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('orderans', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id')->nullable();
            $table->string('status')->nullable();
            $table->string('keterangan')->nullable();
            $table->string('disposisi')->nullable();
            $table->string('pemohon')->nullable();
            $table->unsignedBigInteger('layanan_id')->nullable();
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');;
            $table->foreign('layanan_id')->references('id')->on('layanans')->onDelete('cascade');;
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
