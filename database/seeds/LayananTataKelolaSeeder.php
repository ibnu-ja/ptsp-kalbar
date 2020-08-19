<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class LayananTataKelolaSeeder extends Seeder
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
            'deskripsi' => 'Pelayanan pendaftaran pengadaan barang dan jasa melalui Unit Kerja Pengadaan Barang dan Jasa',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);
        DB::table('layanans')->insert([
            'name' => 'Penyaluran Bantuan Operasional (BOP) FKUB',
            'kategori' => 'Pelayanan Bidang Tata Kelola',
            'tingkat_layanan' => 'Pusat,Kanwil',
            'subkategori' => '1',
            'deskripsi' => 'Pelayanan penyaluran bantuan operasional kepada Forum Kerukunan Umat Beragama (FKUB)',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);
        DB::table('layanans')->insert([
            'name' => 'Konsultasi Pengadaan Barang dan Jasa',
            'kategori' => 'Pelayanan Bidang Tata Kelola',
            'tingkat_layanan' => 'Pusat,Kanwil',
            'subkategori' => '2',
            'deskripsi' => 'Pelayanan konsultasi kepada satuan kerja dan pelaku usaha dalam pengadaan barang dan jasa',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);
        DB::table('layanans')->insert([
            'name' => 'Konsultasi Hukum',
            'kategori' => 'Pelayanan Bidang Tata Kelola',
            'tingkat_layanan' => 'Pusat,Kanwil,Kankemenag',
            'subkategori' => '2',
            'deskripsi' => 'Pelayanan konsultasi kepada satuan kerja dan PNS dalam penanganan kasus hukum',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);
        DB::table('layanans')->insert([
            'name' => 'Konsultasi Perencanaan dan Anggaran',
            'kategori' => 'Pelayanan Bidang Tata Kelola',
            'tingkat_layanan' => 'Pusat,Kanwil',
            'subkategori' => '2',
            'deskripsi' => 'Pelayanan konsultasi kepada satuan kerja dalam melakukan perencanaan anggaran',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);
        DB::table('layanans')->insert([
            'name' => 'Konsultasi Pengelolaan PNBP',
            'kategori' => 'Pelayanan Bidang Tata Kelola',
            'tingkat_layanan' => 'Pusat,Kanwil',
            'subkategori' => '2',
            'deskripsi' => 'Pelayanan konsultasi kepada satuan kerja dalam pengelolaan Penerimaan Negara Bukan Pajak (PNBP)',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);
        DB::table('layanans')->insert([
            'name' => 'Konsultasi Pengelolaan Barang Milik Negara (BMN)',
            'kategori' => 'Pelayanan Bidang Tata Kelola',
            'tingkat_layanan' => 'Pusat,Kanwil',
            'subkategori' => '2',
            'deskripsi' => 'Pelayanan konsultasi kepada satuan kerja dalam pengelolaan Barang Milik Negara (BMN)',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);
        DB::table('layanans')->insert([
            'name' => 'Konsultasi Pengelolaan SBSN',
            'kategori' => 'Pelayanan Bidang Tata Kelola',
            'tingkat_layanan' => 'Pusat',
            'subkategori' => '2',
            'deskripsi' => 'Pelayanan konsultasi kepada satuan kerja dalam pengelolaan Surat Berharga Negara Syariah (SBSN)',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);
        DB::table('layanans')->insert([
            'name' => 'Konsultasi Pengelolaan Badan Layanan Umum (BLU)',
            'kategori' => 'Pelayanan Bidang Tata Kelola',
            'tingkat_layanan' => 'Pusat,Kanwil',
            'subkategori' => '2',
            'deskripsi' => 'Pelayanan konsultasi kepada satuan kerja dalam pengelolaan Badan Layanan Umum (BLU)',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);
        DB::table('layanans')->insert([
            'name' => 'Konsultasi Kepegawaian',
            'kategori' => 'Pelayanan Bidang Tata Kelola',
            'tingkat_layanan' => 'Pusat,Kanwil',
            'subkategori' => '2',
            'deskripsi' => 'Pelayanan konsultasi kepada satuan kerja dan PNS dalam urusan kepegawaian',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);
        DB::table('layanans')->insert([
            'name' => 'Pengelolaan Surat',
            'kategori' => 'Pelayanan Bidang Tata Kelola',
            'tingkat_layanan' => 'Pusat,Kanwil',
            'subkategori' => '3',
            'deskripsi' => 'Pelayanan pengelolaan terhadap surat masuk dan keluar Satuan Kerja atau Unit Kerja',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);
        DB::table('layanans')->insert([
            'name' => 'Legalisir dan Pengesahan Dokumen Kepegawaian',
            'kategori' => 'Pelayanan Bidang Tata Kelola',
            'tingkat_layanan' => 'Pusat,Kanwil',
            'subkategori' => '3',
            'deskripsi' => 'Pelayanan legalisir dan pengesahan dokumen kepegawaian',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);
        DB::table('layanans')->insert([
            'name' => 'Pengaduan Masyarakat',
            'kategori' => 'Pelayanan Bidang Tata Kelola',
            'tingkat_layanan' => 'Pusat,Kanwil,Kankemenag',
            'subkategori' => '3',
            'deskripsi' => 'Pelayanan penanganan pengaduan masyarakat terkait dengan pelayanan publik',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);
        DB::table('layanans')->insert([
            'name' => 'Izin Penelitian',
            'kategori' => 'Pelayanan Bidang Tata Kelola',
            'tingkat_layanan' => 'Pusat,Kanwil,Kankemenag',
            'subkategori' => '3',
            'deskripsi' => 'Pelayanan pemberian izin kepada siswa dan mahasiswa untuk melakukan penelitian pada satuan kerja dan unit kerja di Kementeian Agama',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);
        DB::table('layanans')->insert([
            'name' => 'Izin Magang dan Praktik Kerja Lapangan',
            'kategori' => 'Pelayanan Bidang Tata Kelola',
            'tingkat_layanan' => 'Pusat,Kanwil,Kankemenag',
            'subkategori' => '3',
            'deskripsi' => 'Pelayanan pemberian izin kepada siswa dan mahasiswa untuk melakukan magang dan/atau praktik kerja lapangan pada satuan kerja dan unit kerja di Kementeian Agama',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);
        DB::table('layanans')->insert([
            'name' => 'Izin Permohonan Audiensi',
            'kategori' => 'Pelayanan Bidang Tata Kelola',
            'tingkat_layanan' => 'Pusat,Kanwil,Kankemenag',
            'subkategori' => '3',
            'deskripsi' => 'Pelayanan pemberian izin dan mengatur pertemuan dengan pimpinan Satuan Kerja atau Unit Kerja di Kementeian Agama dari lembaga,komunitas atau kelompok masayrakat.',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);
        DB::table('layanans')->insert([
            'name' => 'Permohonan Informasi Publik',
            'kategori' => 'Pelayanan Bidang Tata Kelola',
            'tingkat_layanan' => 'Pusat,Kanwil,Kankemenag',
            'subkategori' => '3',
            'deskripsi' => 'Pelayanan pemberian informasi publik oleh Pejabat Pengelola Dokumentasi dan Informasi (PPID)',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);
        DB::table('layanans')->insert([
            'name' => 'Permohonan Izin Lambang Kemenag',
            'kategori' => 'Pelayanan Bidang Tata Kelola',
            'tingkat_layanan' => 'Pusat,Kanwil,Kankemenag',
            'subkategori' => '3',
            'deskripsi' => 'Pelayanan penerbitan izin penggunaan lambang Kementerian Agama',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);
        DB::table('layanans')->insert([
            'name' => 'Permohonan Izin Foto Menag dan Wamenag',
            'kategori' => 'Pelayanan Bidang Tata Kelola',
            'tingkat_layanan' => 'Pusat',
            'subkategori' => '3',
            'deskripsi' => 'Pelayanan penerbitan izin penggunaan foto resmi Menteri Agama dan Wakil Menteri Agama',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);
        DB::table('layanans')->insert([
            'name' => 'Pengajuan KARIS/KARSU',
            'kategori' => 'Pelayanan Bidang Tata Kelola',
            'tingkat_layanan' => '',
            'subkategori' => '3',
            'deskripsi' => 'Pelayanan pengajuan pembuatan Kartu Istri/Suami bagi PNS',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);
        DB::table('layanans')->insert([
            'name' => 'Pengajuan KARPEG',
            'kategori' => 'Pelayanan Bidang Tata Kelola',
            'tingkat_layanan' => 'Pusat,Kanwil,Kankemenag',
            'subkategori' => '3',
            'deskripsi' => 'Pelayanan pengajuan pembuatan Kartu Pegawai bagi PNS',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);
        DB::table('layanans')->insert([
            'name' => 'Pengajuan TASPEN',
            'kategori' => 'Pelayanan Bidang Tata Kelola',
            'tingkat_layanan' => 'Pusat,Kanwil,Kankemenag',
            'subkategori' => '3',
            'deskripsi' => 'Pelayanan pengajuan Tabungan dan Asuransi Pensiun',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);
        DB::table('layanans')->insert([
            'name' => 'Pengajuan KP4',
            'kategori' => 'Pelayanan Bidang Tata Kelola',
            'tingkat_layanan' => 'Pusat,Kanwil,Kankemenag',
            'subkategori' => '3',
            'deskripsi' => 'Pelayanan pengajuan pembuatan surat untuk mendapatkan tunjangan keluarga bagi PNS',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);
        DB::table('layanans')->insert([
            'name' => 'Permohonan Rician Gaji',
            'kategori' => 'Pelayanan Bidang Tata Kelola',
            'tingkat_layanan' => 'Pusat,Kanwil,Kankemenag',
            'subkategori' => '3',
            'deskripsi' => 'Pelayanan pengajuan penerbitan rician gaji PNS',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);
        DB::table('layanans')->insert([
            'name' => 'Pengajuan Kenaikan Pangkat',
            'kategori' => 'Pelayanan Bidang Tata Kelola',
            'tingkat_layanan' => 'Pusat,Kanwil,Kankemenag',
            'subkategori' => '3',
            'deskripsi' => 'Pelayanan pengajuan kenaikan pangkat bagi PNS',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);
        DB::table('layanans')->insert([
            'name' => 'Pengajuan Cuti',
            'kategori' => 'Pelayanan Bidang Tata Kelola',
            'tingkat_layanan' => 'Pusat,Kanwil,Kankemenag',
            'subkategori' => '3',
            'deskripsi' => 'Pelayanan pengajuan kenaikan pangkat bagi PNS',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);
        DB::table('layanans')->insert([
            'name' => 'Permohonan Pindah Tugas',
            'kategori' => 'Pelayanan Bidang Tata Kelola',
            'tingkat_layanan' => 'Pusat,Kanwil,Kankemenag',
            'subkategori' => '3',
            'deskripsi' => 'Pelayanan permohonan mutasi atau pindah tugas antar satker maupun antar instansi bagi bagi PNS',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);
        DB::table('layanans')->insert([
            'name' => 'Rekomendasi KITAS/KITAP',
            'kategori' => 'Pelayanan Bidang Tata Kelola',
            'tingkat_layanan' => 'Pusat,Kanwil',
            'subkategori' => '3',
            'deskripsi' => 'Pelayanan penerbitan rekomendasi sebagai prasyarat dalam permhonan Kartu Izin Tinggal Terbatas (KITAS),Kartu Izin Tinggal Tetap (KITAP)',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);
        DB::table('layanans')->insert([
            'name' => 'Rekomendasi IMTA/RPTKA/DPKK',
            'kategori' => 'Pelayanan Bidang Tata Kelola',
            'tingkat_layanan' => 'Pusat',
            'subkategori' => '3',
            'deskripsi' => 'Pelayanan penerbitan rekomendasi sebagai prasyarat dalam permhonan Izin Menggunakan Tenaga Asing (IMTA),Rencana Penggunaan Tenaga Kerja Asing (RPTKA),dan Dana Pengembangan Keahlian dan Keterampilan (DPKK)'
        ]);
    }
}
