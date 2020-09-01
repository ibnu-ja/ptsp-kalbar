<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class LayananSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('layanans')->insert([
            'name' => 'Pengadaan Barang dan Jasa melalui UKPBJ',
            'kategori' => 'Pelayanan Bidang Tata Kelola',
            'tingkat_layanan' => 'Pusat,Kanwil',
            'subkategori' => '1',
            'deskripsi' => "<p>Deskripsi: Pelayanan pendaftaran pengadaan barang dan jasa melalui Unit Kerja Pengadaan Barang dan Jasa</p>
            <p>Syarat:</p>
            <ol>
              <li>Mengajukan surat permohonan dari instansi, organiasi dan Lembaga</li>
              <li>Sistem mekanisme dan prosedur kunsultasi</li>
              <li>Waktu dan tempat kunsultasi</li>
              <li>Judul permasalahan Kunsultasi</li>
              <li>Maksud Tujuan kunsultasi</li>
              <li>Jumlah yang mengikuti audensi kunsultasi</li>
            </ol>",
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);
    }
}
