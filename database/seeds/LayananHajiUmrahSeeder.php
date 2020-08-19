<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class LayananHajiUmrahSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('layanans')->insert([
            'name' => 'Konsultasi Umrah dan Haji',
            'kategori' => 'Pelayanan Bidang Haji dan Umrah',
            'tingkat_layanan' => 'Pusat,Kanwil,Kankemenag',
            'subkategori' => '2',
            'deskripsi' => 'Pelayanan konsultasi kepada warga negara seputar penyelenggaraan umrah dan haji',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);
        DB::table('layanans')->insert([
            'name' => 'Estimasi Keberangkatan Jemaah Haji',
            'kategori' => 'Pelayanan Bidang Haji dan Umrah',
            'tingkat_layanan' => 'Pusat,Kanwil,Kankemenag',
            'subkategori' => '2',
            'deskripsi' => 'Pelayanan memberikan informasi estimasi tahun keberangkatan jemaah haji',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);
        DB::table('layanans')->insert([
            'name' => 'Rekomendasi Visa Jemaah Umrah (Rekomendasi Pembuatan Paspor Umrah/Haji Khusus)',
            'kategori' => 'Pelayanan Bidang Haji dan Umrah',
            'tingkat_layanan' => 'Kankemenag',
            'subkategori' => '3',
            'deskripsi' => 'Pelayanan penerbitan rekomendasi bagi jemaah umrah untuk membuat paspor dan visa umrah',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);
        DB::table('layanans')->insert([
            'name' => 'Pendaftaran Jemaah Haji Reguler',
            'kategori' => 'Pelayanan Bidang Haji dan Umrah',
            'tingkat_layanan' => 'Kankemenag',
            'subkategori' => '3',
            'deskripsi' => 'Pelayanan pendaftaran jemaah haji reguler melalui Siskohat',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);
        DB::table('layanans')->insert([
            'name' => 'Percepatan Jemaah Lansia Haji Reguler',
            'kategori' => 'Pelayanan Bidang Haji dan Umrah',
            'tingkat_layanan' => 'Pusat,Kanwil,Kankemenag',
            'subkategori' => '3',
            'deskripsi' => 'Pelayanan pembatalan bagi jemaah haji reguler',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);
        DB::table('layanans')->insert([
            'name' => 'Permohonan Perubahan Data Jemaah Haji',
            'kategori' => 'Pelayanan Bidang Haji dan Umrah',
            'tingkat_layanan' => 'Pusat,Kanwil,Kankemenag',
            'subkategori' => '3',
            'deskripsi' => 'Pelayanan percepatan jemaah haji lanjut usia untuk berangkat',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);
        DB::table('layanans')->insert([
            'name' => 'Permohonan Pendampingan dan Mahram Jemaah Haji',
            'kategori' => 'Pelayanan Bidang Haji dan Umrah',
            'tingkat_layanan' => 'Pusat,Kanwil,Kankemenag',
            'subkategori' => '3',
            'deskripsi' => 'Pelayanan perubahan data oleh jemaah haji',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);
        DB::table('layanans')->insert([
            'name' => 'Permohonan Penggabungan Jemaah Haji',
            'kategori' => 'Pelayanan Bidang Haji dan Umrah',
            'tingkat_layanan' => 'Pusat,Kanwil,Kankemenag',
            'subkategori' => '3',
            'deskripsi' => 'Permohonan pendampingan atau mahram jemaah haji',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);
        DB::table('layanans')->insert([
            'name' => 'Izin Mutasi Keluar/Masuk Jemaah Antar Embarkasi dan Provinsi',
            'kategori' => 'Pelayanan Bidang Haji dan Umrah',
            'tingkat_layanan' => 'Pusat',
            'subkategori' => '3',
            'deskripsi' => 'Permohonan penggabungan jemaah haji',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);
        DB::table('layanans')->insert([
            'name' => 'Izin Mutasi Keluar/Masuk Jemaah Antar Kabupaten/Kota dalam Provinsi',
            'kategori' => 'Pelayanan Bidang Haji dan Umrah',
            'tingkat_layanan' => 'Kanwil',
            'subkategori' => '3',
            'deskripsi' => 'Pelayanan mutasi jemaah haji antar embarkasi atau antara provinsi',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);
        DB::table('layanans')->insert([
            'name' => 'Pendaftaran Jemaah Haji Khusus',
            'kategori' => 'Pelayanan Bidang Haji dan Umrah',
            'tingkat_layanan' => 'Kanwil',
            'subkategori' => '3',
            'deskripsi' => 'Pelayanan mutasi jemaah haji antar kabupaten dan kota dalam satu provinsi',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);
        DB::table('layanans')->insert([
            'name' => 'Pembatalan Jemaah Haji Khusus',
            'kategori' => 'Pelayanan Bidang Haji dan Umrah',
            'tingkat_layanan' => 'Kanwil',
            'subkategori' => '3',
            'deskripsi' => 'Pelayanan pendaftaran jemaah haji reguler melalui Siskohat',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);
        DB::table('layanans')->insert([
            'name' => 'Perpindahan Jemaah Haji Khusus antar PIHK',
            'kategori' => 'Pelayanan Bidang Haji dan Umrah',
            'tingkat_layanan' => 'Pusat',
            'subkategori' => '3',
            'deskripsi' => 'Pelayanan pembatalan bagi jemaah haji khusus',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);
        DB::table('layanans')->insert([
            'name' => 'Rekomendasi Visa Jemaah Haji Khusus',
            'kategori' => 'Pelayanan Bidang Haji dan Umrah',
            'tingkat_layanan' => 'Kanwil',
            'subkategori' => '3',
            'deskripsi' => 'Pelayanan mutasi atau perindahan jemaah haji khusus antar PIHK',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);
        DB::table('layanans')->insert([
            'name' => 'Manasik Umrah dan Haji',
            'kategori' => 'Pelayanan Bidang Haji dan Umrah',
            'tingkat_layanan' => 'Kankemenag,KUA',
            'subkategori' => '3',
            'deskripsi' => 'Pelayanan penerbitan Surat Rekomendasi bagi jemaah haji khusus untuk membuat paspor dan visa haji',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);
        DB::table('layanans')->insert([
            'name' => 'Rekomendasi PPIU',
            'kategori' => 'Pelayanan Bidang Haji dan Umrah',
            'tingkat_layanan' => 'Kanwil',
            'subkategori' => '3',
            'deskripsi' => 'Pelayanan pemberian manasik bagi jemaah umrah dan haji',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);
        DB::table('layanans')->insert([
            'name' => 'Permohonan Izin PPIU',
            'kategori' => 'Pelayanan Bidang Haji dan Umrah',
            'tingkat_layanan' => 'Pusat',
            'subkategori' => '3',
            'deskripsi' => 'Pelayanan penerbitan surat rekomendasi dalam pengajuan izin Penyelenggara Perjalanan Ibadah Umrah (PPIU)',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);
        DB::table('layanans')->insert([
            'name' => 'Akeditasi PPIU',
            'kategori' => 'Pelayanan Bidang Haji dan Umrah',
            'tingkat_layanan' => 'Pusat',
            'subkategori' => '3',
            'deskripsi' => 'Pelayanan penerbitan izin Penyelenggara Perjalanan Ibadah Umrah (PPIU)',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);
        DB::table('layanans')->insert([
            'name' => 'Perubahan Direksi atau Domisili PPIU',
            'kategori' => 'Pelayanan Bidang Haji dan Umrah',
            'tingkat_layanan' => 'Pusat',
            'subkategori' => '3',
            'deskripsi' => 'Pelayanan akreditasi Penyelenggara Perjalanan Ibadah Umrah (PPIU)',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);
        DB::table('layanans')->insert([
            'name' => 'Rekomendasi PIHK',
            'kategori' => 'Pelayanan Bidang Haji dan Umrah',
            'tingkat_layanan' => 'Kanwil',
            'subkategori' => '3',
            'deskripsi' => 'Pelayanan perubahan direksi atau domisili Penyelenggara Perjalanan Ibadah Umrah (PPIU)',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);
        DB::table('layanans')->insert([
            'name' => 'Permohonan Izin PIHK',
            'kategori' => 'Pelayanan Bidang Haji dan Umrah',
            'tingkat_layanan' => 'Pusat',
            'subkategori' => '3',
            'deskripsi' => 'Pelayanan penerbitan surat rekomendasi dalam pengajuan izin Penyelenggara Ibadah Haji Khusus (PIHK)',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);
        DB::table('layanans')->insert([
            'name' => 'Akeditasi PIHK',
            'kategori' => 'Pelayanan Bidang Haji dan Umrah',
            'tingkat_layanan' => 'Pusat',
            'subkategori' => '3',
            'deskripsi' => 'Pelayanan penerbitan izin Penyelenggara Ibadah Haji Khusus (PIHK)',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);
        DB::table('layanans')->insert([
            'name' => 'Perubahan Direksi atau Domisili PIHK',
            'kategori' => 'Pelayanan Bidang Haji dan Umrah',
            'tingkat_layanan' => 'Pusat',
            'subkategori' => '3',
            'deskripsi' => 'Pelayanan akreditasi Penyelenggara Ibadah Haji Khusus (PIHK)',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);
        DB::table('layanans')->insert([
            'name' => 'Rekomendasi KBIHU',
            'kategori' => 'Pelayanan Bidang Haji dan Umrah',
            'tingkat_layanan' => 'Kanwil,Kankemenag',
            'subkategori' => '3',
            'deskripsi' => 'Pelayanan perubahan direksi atau domisili Penyelenggara Ibadah Haji Khusus (PIHK)',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);
        DB::table('layanans')->insert([
            'name' => 'Permohonan Izin KBIHU',
            'kategori' => 'Pelayanan Bidang Haji dan Umrah',
            'tingkat_layanan' => 'Pusat',
            'subkategori' => '3',
            'deskripsi' => 'Pelayanan penerbitan Surat Rekomendasi sebagai dokumen prasyarat izin operasional Kelompok Bimbingan Ibadah Haji dan Umrah (KBIHU)',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);
        DB::table('layanans')->insert([
            'name' => 'Akreditasi KBIHU',
            'kategori' => 'Pelayanan Bidang Haji dan Umrah',
            'tingkat_layanan' => 'Pusat',
            'subkategori' => '3',
            'deskripsi' => 'Pelayanan penerbitan Surat Keputusan tentang izin operasional Kelompok Bimbingan Ibadah Haji dan Umrah (KBIHU)',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);
        DB::table('layanans')->insert([
            'name' => 'Permohonan Izin Cabang PPIU',
            'kategori' => 'Pelayanan Bidang Haji dan Umrah',
            'tingkat_layanan' => 'Kanwil',
            'subkategori' => '3',
            'deskripsi' => 'Pelayanan penerbitan surat rekomendasi dalam pengajuan izin Kelompok Bimbingan Ibadah Haji dan Umrah (KBIHU)',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);
        DB::table('layanans')->insert([
            'name' => 'Perpanjangan Izin Cabang PPIU',
            'kategori' => 'Pelayanan Bidang Haji dan Umrah',
            'tingkat_layanan' => 'Kanwil',
            'subkategori' => '3',
            'deskripsi' => 'Pelayanan penerbitan izin pendirikan kantor cabang Penyelenggaran Perjalanan Ibadah Umrah (PPIU)',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);
        DB::table('layanans')->insert([
            'name' => 'Permohoan Izin Cabang PIHK',
            'kategori' => 'Pelayanan Bidang Haji dan Umrah',
            'tingkat_layanan' => 'Kanwil',
            'subkategori' => '3',
            'deskripsi' => 'Pelayanan penerbitan izin perpanjangan operasional kantor cabang Penyelenggaran Perjalanan Ibadah Umrah (PPIU)',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);
        DB::table('layanans')->insert([
            'name' => 'Perpanjangan Izin Cabang PIHK',
            'kategori' => 'Pelayanan Bidang Haji dan Umrah',
            'tingkat_layanan' => 'Kanwil',
            'subkategori' => '3',
            'deskripsi' => 'Pelayanan penerbitan izin pendirikan kantor cabang Penyelenggaran Ibadah Haji Khusus (PIHK)',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);
        DB::table('layanans')->insert([
            'name' => 'Sewa Asrama Haji',
            'kategori' => 'Pelayanan Bidang Haji dan Umrah',
            'tingkat_layanan' => 'Kanwil',
            'subkategori' => '3',
            'deskripsi' => 'Pelayanan penerbitan izin perpanjangan operasional kantor cabang Penyelenggaran Ibadah Haji Khusus (PIHK)'
        ]);
    }
}
