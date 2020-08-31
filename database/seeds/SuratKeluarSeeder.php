<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class SuratKeluarSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('surat_keluars')->insert([
            'user_id' => '3', //pak Rohadi
            'nomor_urut' => '1000',
            'nomor_surat' => '1000/Kw.14.1/Bambang/08/2020',
            'jenis' => 'Surat Keluar Biasa',
            'tgl_surat' => '2020-08-31',
            'kode_satker' => 'Kw.14.1',
            'asal' => 'Kepala Bagian Tata Usaha',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);
    }
}
