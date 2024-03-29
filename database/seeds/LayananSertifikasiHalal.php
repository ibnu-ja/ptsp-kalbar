<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class LayananSertifikasiHalal extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('layanans')->insert([
            'name' => 'Konsultasi Sertifikat Halal',
            'kategori' => 'Pelayanan Bidang Sertifikasi Halal',
            'tingkat_layanan' => 'Pusat,Kanwil',
            'subkategori' => '2',
            'deskripsi' => 'Pelayanan konsultasi terkait sertifikat produk halal',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);
        DB::table('layanans')->insert([
            'name' => 'Permohonan Pendaftaran Sertifkat Halal',
            'kategori' => 'Pelayanan Bidang Sertifikasi Halal',
            'tingkat_layanan' => 'Pusat,Kanwil',
            'subkategori' => '3',
            'deskripsi' => 'Pelayanan pendaftaran sertifikasi produk halal oleh pelaku usaha dalam negeri dan luar negeri',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);
        DB::table('layanans')->insert([
            'name' => 'Permohonan Registrasi Produk Halal',
            'kategori' => 'Pelayanan Bidang Sertifikasi Halal',
            'tingkat_layanan' => 'Pusat',
            'subkategori' => '3',
            'deskripsi' => 'Pelayanan regustrasi produk halal oleh pelaku usaha luar negeri',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);
        DB::table('layanans')->insert([
            'name' => 'Permohonan Pendaftaran LPH',
            'kategori' => 'Pelayanan Bidang Sertifikasi Halal',
            'tingkat_layanan' => 'Pusat',
            'subkategori' => '3',
            'deskripsi' => 'Pelayanan pendaftaran pendirian Lembaga Pemeriksa Halal'
        ]);
    }
}
