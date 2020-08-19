<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class LayananPendidikanSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('layanans')->insert([
            'name' => 'Permohonan Bantuan Pendidikan Agama Katolik',
            'kategori' => 'Pelayanan Bidang Pendidikan',
            'tingkat_layanan' => '',
            'subkategori' => '1',
            'deskripsi' => 'Pelayanan permohonan bantuan pendidikan agama Katolik'
        ]);
        DB::table('layanans')->insert([
            'name' => 'Penyaluran Bantuan Sosial Pendidikan Kesetaraan',
            'kategori' => 'Pelayanan Bidang Pendidikan',
            'tingkat_layanan' => '',
            'subkategori' => '1',
            'deskripsi' => 'Pelayanan permohonan bantuan pendidikan kesetaraan'
        ]);
        DB::table('layanans')->insert([
            'name' => 'Beasiswa dan Bantuan Mahasiswa Miskin di PTK Budha',
            'kategori' => 'Pelayanan Bidang Pendidikan',
            'tingkat_layanan' => 'Pusat',
            'subkategori' => '1',
            'deskripsi' => 'Pelayanan permohonan bantuan beasiswa dan beasiswa miskin pada Perguruan Tinggi Keagamaan Buddha'
        ]);
        DB::table('layanans')->insert([
            'name' => 'Permohonan Bantuan Madrasah Diniyah Takmiliyah',
            'kategori' => 'Pelayanan Bidang Pendidikan',
            'tingkat_layanan' => 'Pusat,Kanwil',
            'subkategori' => '1',
            'deskripsi' => 'Pelayanan permohonan bantuan Madrasah Diniyah Takmiliyah'
        ]);
        DB::table('layanans')->insert([
            'name' => 'Bantuan Sekolah Teologi Katolik',
            'kategori' => 'Pelayanan Bidang Pendidikan',
            'tingkat_layanan' => 'Kanwil',
            'subkategori' => '1',
            'deskripsi' => 'Pelayanan permohonan bantuan pada Sekolah Teologi Katolik'
        ]);
        DB::table('layanans')->insert([
            'name' => 'Bantuan PTK Katolik',
            'kategori' => 'Pelayanan Bidang Pendidikan',
            'tingkat_layanan' => 'Pusat',
            'subkategori' => '1',
            'deskripsi' => 'Pelayanan permohonan bantuan pada Perguruan Tinggi Keagamaan Katolik'
        ]);
        DB::table('layanans')->insert([
            'name' => 'Bantuan Rehab Madrasah Diniyah',
            'kategori' => 'Pelayanan Bidang Pendidikan',
            'tingkat_layanan' => 'Kanwil',
            'subkategori' => '1',
            'deskripsi' => 'Pelayanan permohonan bantuan rehabilitasi madrasah diniyah'
        ]);
        DB::table('layanans')->insert([
            'name' => 'Bantuan Insentif Guru Pendidikan Agama Buddha dan Keagamaan Buddha',
            'kategori' => 'Pelayanan Bidang Pendidikan',
            'tingkat_layanan' => 'Kanwil,Kankemenag',
            'subkategori' => '1',
            'deskripsi' => 'Pelayanan Bantuan Insentif Guru Pendidikan Agama Buddha dan Keagamaan Buddha'
        ]);
        DB::table('layanans')->insert([
            'name' => 'Bantuan Operasional Lembaga Pendidikan Keagamaan Buddha',
            'kategori' => 'Pelayanan Bidang Pendidikan',
            'tingkat_layanan' => 'Kanwil,Kankemenag',
            'subkategori' => '1',
            'deskripsi' => 'Pelayanan Bantuan Operasional Lembaga Pendidikan Keagamaan Buddha'
        ]);
        DB::table('layanans')->insert([
            'name' => 'Bantuan Sarana dan Prasarana Lembaga Pendidikan Keagamaan Buddha',
            'kategori' => 'Pelayanan Bidang Pendidikan',
            'tingkat_layanan' => 'Kanwil,Kankemenag',
            'subkategori' => '1',
            'deskripsi' => 'Pelayanan Bantuan Sarana dan Prasarana Lembaga Pendidikan Keagamaan Buddha'
        ]);
        DB::table('layanans')->insert([
            'name' => 'Bantuan Renovasi,Rehabilitasi,dan Pembangunan Gedung Lembaga Pendidikan Keagamaan Buddha',
            'kategori' => 'Pelayanan Bidang Pendidikan',
            'tingkat_layanan' => 'Kanwil,Kankemenag',
            'subkategori' => '1',
            'deskripsi' => 'Pelayanan Bantuan Renovasi,Rehabilitasi,dan Pembangunan Gedung Lembaga Pendidikan Keagamaan Buddha'
        ]);
        DB::table('layanans')->insert([
            'name' => 'Bantuan KKG dan MGMP Mata Pelajaran Pendidikan Agama Buddha',
            'kategori' => 'Pelayanan Bidang Pendidikan',
            'tingkat_layanan' => 'Kanwil,Kankemenag',
            'subkategori' => '1',
            'deskripsi' => 'Bantuan KKG dan MGMP Mata Pelajaran Pendidikan Agama Buddha'
        ]);
        DB::table('layanans')->insert([
            'name' => 'Konsultasi Pengelolaan BOS',
            'kategori' => 'Pelayanan Bidang Pendidikan',
            'tingkat_layanan' => 'Pusat,Kanwil',
            'subkategori' => '2',
            'deskripsi' => 'Pelayanan konsultasi kepada satuan kerja dalam pengelolaan dan pelaksanaan anggaran Bantuan Operasional Sekolah'
        ]);
        DB::table('layanans')->insert([
            'name' => 'Konsultasi Pengelolaan PIP',
            'kategori' => 'Pelayanan Bidang Pendidikan',
            'tingkat_layanan' => 'Pusat,Kanwil',
            'subkategori' => '2',
            'deskripsi' => 'Pelayanan konsultasi kepada satuan kerja dalam pengelolaan dan pelaksanaan anggaran Program Indonesia Pintar'
        ]);
        DB::table('layanans')->insert([
            'name' => 'Legalisir Ijazah dan Dokumen Lainnya',
            'kategori' => 'Pelayanan Bidang Pendidikan',
            'tingkat_layanan' => 'Pusat,Kanwil,Kankemenag',
            'subkategori' => '3',
            'deskripsi' => 'Pelayanan legalisir atau pengesahan ijazah dan dokumen lainnya'
        ]);
        DB::table('layanans')->insert([
            'name' => 'Ijin Penelitian Madrasah',
            'kategori' => 'Pelayanan Bidang Pendidikan',
            'tingkat_layanan' => '',
            'subkategori' => '3',
            'deskripsi' => ''
        ]);
        DB::table('layanans')->insert([
            'name' => 'Legalisir Ijazah Pondok Pesantren',
            'kategori' => 'Pelayanan Bidang Pendidikan',
            'tingkat_layanan' => '',
            'subkategori' => '3',
            'deskripsi' => ''
        ]);
        DB::table('layanans')->insert([
            'name' => 'Surat Keterangan Pengganti Ijazah',
            'kategori' => 'Pelayanan Bidang Pendidikan',
            'tingkat_layanan' => 'Kanwil',
            'subkategori' => '3',
            'deskripsi' => 'Pelayanan penerbitan surat keterangan pengganti ijazah yang hilang atau rusak'
        ]);
        DB::table('layanans')->insert([
            'name' => 'Surat Keterangan Penyetaraan Ijazah',
            'kategori' => 'Pelayanan Bidang Pendidikan',
            'tingkat_layanan' => 'Kanwil,Kankemenag',
            'subkategori' => '3',
            'deskripsi' => 'Pelayanan penerbitan surat keterangan penyetaraan ijazah'
        ]);
        DB::table('layanans')->insert([
            'name' => 'Permohonan Izin RA dan Madrasah',
            'kategori' => 'Pelayanan Bidang Pendidikan',
            'tingkat_layanan' => 'Kanwil',
            'subkategori' => '3',
            'deskripsi' => 'Pelayanan penerbitan izin operasional Raudhatul Athfal dan madrasah'
        ]);
        DB::table('layanans')->insert([
            'name' => 'Rekomendasi Pindah Sekolah',
            'kategori' => 'Pelayanan Bidang Pendidikan',
            'tingkat_layanan' => 'Kanwil,Kankemenag',
            'subkategori' => '3',
            'deskripsi' => 'Pelayanan penerbitan surat keterangan pindah sekolah atau madrasah'
        ]);
        DB::table('layanans')->insert([
            'name' => 'Rekomendasi Bantuan Pondok Pesantren',
            'kategori' => 'Pelayanan Bidang Pendidikan',
            'tingkat_layanan' => 'Kanwil,Kankemenag',
            'subkategori' => '3',
            'deskripsi' => 'Pelayanan penerbitan surat rekomendasi kepada Pondok Pesantren sebagai dokumen prasyarat mengajukan bantuan'
        ]);
        DB::table('layanans')->insert([
            'name' => 'Rekomendasi Bantuan TPQ',
            'kategori' => 'Pelayanan Bidang Pendidikan',
            'tingkat_layanan' => 'Kanwil,Kankemenag',
            'subkategori' => '3',
            'deskripsi' => 'Pelayanan penerbitan surat rekomendasi sebagai dokumen prasyarat mengajukan bantuan kepada Taman Pendidikan Al Quran'
        ]);
        DB::table('layanans')->insert([
            'name' => 'Izin Operasional Madrasah Diniyah',
            'kategori' => 'Pelayanan Bidang Pendidikan',
            'tingkat_layanan' => 'Kankemenag',
            'subkategori' => '3',
            'deskripsi' => 'Pelayanan penerbitan izin operasional Madrasah Diniyah'
        ]);
        DB::table('layanans')->insert([
            'name' => 'Akreditasi Madrasah',
            'kategori' => 'Pelayanan Bidang Pendidikan',
            'tingkat_layanan' => 'Pusat,Kanwil',
            'subkategori' => '3',
            'deskripsi' => 'Pelayanan akreditas madrasah'
        ]);
        DB::table('layanans')->insert([
            'name' => 'Permohonan izin Madrasah',
            'kategori' => 'Pelayanan Bidang Pendidikan',
            'tingkat_layanan' => 'Kanwil,Kankemenag',
            'subkategori' => '3',
            'deskripsi' => 'Pelayanan penerbitan izin pendirian madrasah ibtidaiyah,tsanawiyah dan aliyah'
        ]);
        DB::table('layanans')->insert([
            'name' => 'Rekomendasi Madrasah Diniyah Takmiliyah',
            'kategori' => 'Pelayanan Bidang Pendidikan',
            'tingkat_layanan' => 'Kankemenag',
            'subkategori' => '3',
            'deskripsi' => 'Pelayanan penerbitan surat rekomendasi sebagai prasyarat dokumen pendirian madrasah diniyah takmiliyah'
        ]);
        DB::table('layanans')->insert([
            'name' => "Izin Operasional Taklim Qur'an",
            'kategori' => 'Pelayanan Bidang Pendidikan',
            'tingkat_layanan' => 'Kankemenag',
            'subkategori' => '3',
            'deskripsi' => 'Pelayanan penerbitan surat izin operasional penyelenggaraan Taklim Quran'
        ]);
        DB::table('layanans')->insert([
            'name' => 'Izin Operasional Ulya Wajar Dikdas',
            'kategori' => 'Pelayanan Bidang Pendidikan',
            'tingkat_layanan' => 'Kankemenag',
            'subkategori' => '3',
            'deskripsi' => 'Pelayanan penerbitan surat izin operasional penyelenggaraan Madrasah Diniyah Ulya Wajib Belajar Pendidikan Dasar'
        ]);
        DB::table('layanans')->insert([
            'name' => 'Izin Operasional Pondok Pesantren',
            'kategori' => 'Pelayanan Bidang Pendidikan',
            'tingkat_layanan' => 'Kanwil,Kankemenag',
            'subkategori' => '3',
            'deskripsi' => 'Pelayanan penerbitan surat izin operasional Pondok Pesantren'
        ]);
        DB::table('layanans')->insert([
            'name' => "Rekomendasi Ma'had Aly",
            'kategori' => 'Pelayanan Bidang Pendidikan',
            'tingkat_layanan' => 'Kanwil',
            'subkategori' => '3',
            'deskripsi' => "Pelayanan penerbitan surat rekomendasi sebagai dokumen prasyrarat pengajuan izin pendirian Ma'had Aly"
        ]);
        DB::table('layanans')->insert([
            'name' => 'Rekomendasi Mutasi Guru',
            'kategori' => 'Pelayanan Bidang Pendidikan',
            'tingkat_layanan' => 'Kankemenag',
            'subkategori' => '3',
            'deskripsi' => 'Pelayanan penerbitan surat rekomendasi sebagai dokumen prasyrarat pengajuan izin mutasi guru'
        ]);
        DB::table('layanans')->insert([
            'name' => 'Tugas Belajar S1',
            'kategori' => 'Pelayanan Bidang Pendidikan',
            'tingkat_layanan' => 'Kanwil',
            'subkategori' => '3',
            'deskripsi' => 'Pelayanan penerbitan surat tugas belajar S1'
        ]);
        DB::table('layanans')->insert([
            'name' => 'Izin Belajar S1',
            'kategori' => 'Pelayanan Bidang Pendidikan',
            'tingkat_layanan' => 'Kanwil',
            'subkategori' => '3',
            'deskripsi' => 'Pelayanan penerbitan surat izin belajar S1'
        ]);
        DB::table('layanans')->insert([
            'name' => 'Rekomendasi Tugas Belajar S2 dan S3',
            'kategori' => 'Pelayanan Bidang Pendidikan',
            'tingkat_layanan' => 'Kanwil',
            'subkategori' => '3',
            'deskripsi' => 'Pelayanan penerbitan surat rekomendasi sebagai prasyarat pengajuan surat tugas belajar S2 atau S3'
        ]);
        DB::table('layanans')->insert([
            'name' => 'Rekomendasi izin Belajar ke Luar Negeri',
            'kategori' => 'Pelayanan Bidang Pendidikan',
            'tingkat_layanan' => 'Kanwil',
            'subkategori' => '3',
            'deskripsi' => 'Pelayanan penerbitan surat rekomendasi sebagai prasyarat pengajuan izin belajar ke luar negeri'
        ]);
        DB::table('layanans')->insert([
            'name' => 'Rekomendasi Pendidikan Diniyah Formal',
            'kategori' => 'Pelayanan Bidang Pendidikan',
            'tingkat_layanan' => 'Kankemenag',
            'subkategori' => '3',
            'deskripsi' => 'Pelayanan penerbitan surat rekomendasi sebagai prasyarat pengajuan izin pendidirian lembaga Pendidikan Diniyah Formal'
        ]);
        DB::table('layanans')->insert([
            'name' => 'Permohonan Izin Pendirian PTK Islam',
            'kategori' => 'Pelayanan Bidang Pendidikan',
            'tingkat_layanan' => 'Pusat',
            'subkategori' => '3',
            'deskripsi' => 'Pelayanan penerbitan izin pendirikan Perguruan Tinggi Keagamaan Islam'
        ]);
        DB::table('layanans')->insert([
            'name' => 'Akreditasi PTK Islam',
            'kategori' => 'Pelayanan Bidang Pendidikan',
            'tingkat_layanan' => 'Pusat',
            'subkategori' => '3',
            'deskripsi' => 'Pelayanan akreditasi Perguruan Tinggi Keagamaan Islam'
        ]);
        DB::table('layanans')->insert([
            'name' => 'Permohonan Izin Program Studi PTK Islam',
            'kategori' => 'Pelayanan Bidang Pendidikan',
            'tingkat_layanan' => 'Pusat',
            'subkategori' => '3',
            'deskripsi' => 'Pelayanan penerbitan izin pembukaan program studi pada Perguruan Tinggi Keagamaan Islam'
        ]);
        DB::table('layanans')->insert([
            'name' => 'Akreditasi Program Studi PTK Islam',
            'kategori' => 'Pelayanan Bidang Pendidikan',
            'tingkat_layanan' => 'Pusat',
            'subkategori' => '3',
            'deskripsi' => 'Pelayanan akreditasi program studi pada Perguruan Tinggi Keagamaan Islam'
        ]);
        DB::table('layanans')->insert([
            'name' => 'Perpanjangan Izin Program Studi PTK Islam',
            'kategori' => 'Pelayanan Bidang Pendidikan',
            'tingkat_layanan' => 'Pusat',
            'subkategori' => '3',
            'deskripsi' => 'Pelayanan perpanjangan izin operasional program studi pada Perguruan Tinggi Keagamaan Islam'
        ]);
        DB::table('layanans')->insert([
            'name' => 'Permohonan Izin Pendirian PTK Kristen',
            'kategori' => 'Pelayanan Bidang Pendidikan',
            'tingkat_layanan' => 'Pusat',
            'subkategori' => '3',
            'deskripsi' => 'Pelayanan penerbitan izin pendirikan Perguruan Tinggi Keagamaan Kristen'
        ]);
        DB::table('layanans')->insert([
            'name' => 'Akreditasi PTK Kristen',
            'kategori' => 'Pelayanan Bidang Pendidikan',
            'tingkat_layanan' => 'Pusat',
            'subkategori' => '3',
            'deskripsi' => 'Pelayanan akreditasi Perguruan Tinggi Keagamaan Kristen'
        ]);
        DB::table('layanans')->insert([
            'name' => 'Permohonan Izin Program Studi PTK Kristen',
            'kategori' => 'Pelayanan Bidang Pendidikan',
            'tingkat_layanan' => 'Pusat',
            'subkategori' => '3',
            'deskripsi' => 'Pelayanan penerbitan izin pembukaan program studi pada Perguruan Tinggi Keagamaan Kristen'
        ]);
        DB::table('layanans')->insert([
            'name' => 'Akreditasi Program Studi PTK Kristen',
            'kategori' => 'Pelayanan Bidang Pendidikan',
            'tingkat_layanan' => 'Pusat',
            'subkategori' => '3',
            'deskripsi' => 'Pelayanan akreditasi program studi pada Perguruan Tinggi Keagamaan Kristen'
        ]);
        DB::table('layanans')->insert([
            'name' => 'Perpanjangan Izin Program Studi PTK Kristen',
            'kategori' => 'Pelayanan Bidang Pendidikan',
            'tingkat_layanan' => 'Pusat',
            'subkategori' => '3',
            'deskripsi' => 'Pelayanan perpanjangan izin operasional program studi pada Perguruan Tinggi Keagamaan Kristen'
        ]);
        DB::table('layanans')->insert([
            'name' => 'Permohonan Izin Pendirian PTK Katolik',
            'kategori' => 'Pelayanan Bidang Pendidikan',
            'tingkat_layanan' => 'Pusat',
            'subkategori' => '3',
            'deskripsi' => 'Pelayanan penerbitan izin pendirikan Perguruan Tinggi Keagamaan Katolik'
        ]);
        DB::table('layanans')->insert([
            'name' => 'Akreditasi PTK Katolik',
            'kategori' => 'Pelayanan Bidang Pendidikan',
            'tingkat_layanan' => 'Pusat',
            'subkategori' => '3',
            'deskripsi' => 'Pelayanan akreditasi Perguruan Tinggi Keagamaan Katolik'
        ]);
        DB::table('layanans')->insert([
            'name' => 'Permohonan Izin Program Studi PTK Katolik',
            'kategori' => 'Pelayanan Bidang Pendidikan',
            'tingkat_layanan' => 'Pusat',
            'subkategori' => '3',
            'deskripsi' => 'Pelayanan penerbitan izin pembukaan program studi pada Perguruan Tinggi Keagamaan Katolik'
        ]);
        DB::table('layanans')->insert([
            'name' => 'Akreditasi Program Studi PTK Katolik',
            'kategori' => 'Pelayanan Bidang Pendidikan',
            'tingkat_layanan' => 'Pusat',
            'subkategori' => '3',
            'deskripsi' => 'Pelayanan akreditasi program studi pada Perguruan Tinggi Keagamaan Katolik'
        ]);
        DB::table('layanans')->insert([
            'name' => 'Perpanjangan Izin Program Studi PTK Katolik',
            'kategori' => 'Pelayanan Bidang Pendidikan',
            'tingkat_layanan' => 'Pusat',
            'subkategori' => '3',
            'deskripsi' => 'Pelayanan perpanjangan izin operasional program studi pada Perguruan Tinggi Keagamaan Katolik'
        ]);
        DB::table('layanans')->insert([
            'name' => 'Permohonan Izin Pendirian PTK Hindu',
            'kategori' => 'Pelayanan Bidang Pendidikan',
            'tingkat_layanan' => 'Pusat',
            'subkategori' => '3',
            'deskripsi' => 'Pelayanan penerbitan izin pendirikan Perguruan Tinggi Keagamaan Hindu'
        ]);
        DB::table('layanans')->insert([
            'name' => 'Akreditasi PTK Hindu',
            'kategori' => 'Pelayanan Bidang Pendidikan',
            'tingkat_layanan' => 'Pusat',
            'subkategori' => '3',
            'deskripsi' => 'Pelayanan akreditasi Perguruan Tinggi Keagamaan Hindu'
        ]);
        DB::table('layanans')->insert([
            'name' => 'Permohonan Izin Program Studi PTK Hindu',
            'kategori' => 'Pelayanan Bidang Pendidikan',
            'tingkat_layanan' => 'Pusat',
            'subkategori' => '3',
            'deskripsi' => 'Pelayanan penerbitan izin pembukaan program studi pada Perguruan Tinggi Keagamaan Hindu'
        ]);
        DB::table('layanans')->insert([
            'name' => 'Akreditasi Program Studi PTK Hindu',
            'kategori' => 'Pelayanan Bidang Pendidikan',
            'tingkat_layanan' => 'Pusat',
            'subkategori' => '3',
            'deskripsi' => 'Pelayanan akreditasi program studi pada Perguruan Tinggi Keagamaan Hindu'
        ]);
        DB::table('layanans')->insert([
            'name' => 'Perpanjangan Izin Program Studi PTK Hindu',
            'kategori' => 'Pelayanan Bidang Pendidikan',
            'tingkat_layanan' => 'Pusat',
            'subkategori' => '3',
            'deskripsi' => 'Pelayanan perpanjangan izin operasional program studi pada Perguruan Tinggi Keagamaan Hindu'
        ]);
        DB::table('layanans')->insert([
            'name' => 'Permohonan Izin Pendirian PTK Buddha',
            'kategori' => 'Pelayanan Bidang Pendidikan',
            'tingkat_layanan' => 'Pusat',
            'subkategori' => '3',
            'deskripsi' => 'Pelayanan penerbitan izin pendirikan Perguruan Tinggi Keagamaan Buddha'
        ]);
        DB::table('layanans')->insert([
            'name' => 'Akreditasi PTK Buddha',
            'kategori' => 'Pelayanan Bidang Pendidikan',
            'tingkat_layanan' => 'Pusat',
            'subkategori' => '3',
            'deskripsi' => 'Pelayanan akreditasi Perguruan Tinggi Keagamaan Buddha'
        ]);
        DB::table('layanans')->insert([
            'name' => 'Permohonan Izin Program Studi PTK Buddha',
            'kategori' => 'Pelayanan Bidang Pendidikan',
            'tingkat_layanan' => 'Pusat',
            'subkategori' => '3',
            'deskripsi' => 'Pelayanan penerbitan izin pembukaan program studi pada Perguruan Tinggi Keagamaan Buddha'
        ]);
        DB::table('layanans')->insert([
            'name' => 'Akreditasi Program Studi PTK Buddha',
            'kategori' => 'Pelayanan Bidang Pendidikan',
            'tingkat_layanan' => 'Pusat',
            'subkategori' => '3',
            'deskripsi' => 'Pelayanan akreditasi program studi pada Perguruan Tinggi Keagamaan Buddha'
        ]);
        DB::table('layanans')->insert([
            'name' => 'Perpanjangan Izin Program Studi PTK Buddha',
            'kategori' => 'Pelayanan Bidang Pendidikan',
            'tingkat_layanan' => 'Pusat',
            'subkategori' => '3',
            'deskripsi' => 'Pelayanan perpanjangan izin operasional program studi pada Perguruan Tinggi Keagamaan Buddha'
        ]);
        DB::table('layanans')->insert([
            'name' => 'Permohonan Izin Pendirian PTK Konghucu',
            'kategori' => 'Pelayanan Bidang Pendidikan',
            'tingkat_layanan' => 'Pusat',
            'subkategori' => '3',
            'deskripsi' => 'Pelayanan penerbitan izin pendirikan Perguruan Tinggi Keagamaan Konghucu'
        ]);
        DB::table('layanans')->insert([
            'name' => 'Akreditasi PTK Konghucu',
            'kategori' => 'Pelayanan Bidang Pendidikan',
            'tingkat_layanan' => 'Pusat',
            'subkategori' => '3',
            'deskripsi' => 'Pelayanan akreditasi Perguruan Tinggi Keagamaan Konghucu'
        ]);
        DB::table('layanans')->insert([
            'name' => 'Permohonan Izin Program Studi PTK Konghucu',
            'kategori' => 'Pelayanan Bidang Pendidikan',
            'tingkat_layanan' => 'Pusat',
            'subkategori' => '3',
            'deskripsi' => 'Pelayanan penerbitan izin pembukaan program studi pada Perguruan Tinggi Keagamaan Konghucu'
        ]);
        DB::table('layanans')->insert([
            'name' => 'Akreditasi Program Studi PTK Konghucu',
            'kategori' => 'Pelayanan Bidang Pendidikan',
            'tingkat_layanan' => 'Pusat',
            'subkategori' => '3',
            'deskripsi' => 'Pelayanan penerbitan izin pembukaan program studi pada Perguruan Tinggi Keagamaan Konghucu'
        ]);
        DB::table('layanans')->insert([
            'name' => 'Perpanjangan Izin Program Studi PTK Konghucu',
            'kategori' => 'Pelayanan Bidang Pendidikan',
            'tingkat_layanan' => 'Pusat',
            'subkategori' => '3',
            'deskripsi' => 'Pelayanan perpanjangan izin operasional program studi pada Perguruan Tinggi Keagamaan Konghucu'
        ]);
        DB::table('layanans')->insert([
            'name' => 'Permohonan Izin Sekolah Teologi Kristen',
            'kategori' => 'Pelayanan Bidang Pendidikan',
            'tingkat_layanan' => 'Pusat',
            'subkategori' => '3',
            'deskripsi' => 'Pelayanan penerbitan surat operasional Sekolah Teologi Kristen'
        ]);
        DB::table('layanans')->insert([
            'name' => 'Permohonan Izin Sekolah Teologi Katolik',
            'kategori' => 'Pelayanan Bidang Pendidikan',
            'tingkat_layanan' => 'Pusat',
            'subkategori' => '3',
            'deskripsi' => 'Pelayanan penerbitan surat operasional Sekolah Teologi Katolik'
        ]);
        DB::table('layanans')->insert([
            'name' => 'Legalisasi Ijazah Sekolah Teologi dan PTK Kristen',
            'kategori' => 'Pelayanan Bidang Pendidikan',
            'tingkat_layanan' => 'Kanwil',
            'subkategori' => '3',
            'deskripsi' => 'Pelayanan legalisir ijazah sekolah teologi dan PTK Kristen'
        ]);
        DB::table('layanans')->insert([
            'name' => 'Legalisasi Ijazah Sekolah Teologi dan PTK Katolik',
            'kategori' => 'Pelayanan Bidang Pendidikan',
            'tingkat_layanan' => 'Kanwil',
            'subkategori' => '3',
            'deskripsi' => 'Pelayanan legalisir ijazah sekolah teologi dan PTK Katolik'
        ]);
        DB::table('layanans')->insert([
            'name' => 'Rekomendasi Sekolah Teologi Kristen',
            'kategori' => 'Pelayanan Bidang Pendidikan',
            'tingkat_layanan' => 'Kanwil',
            'subkategori' => '3',
            'deskripsi' => 'Pelayanan penerbitan surat rekomendasi sebagai prasyarat dokumen izin pendirian sekolah teologi Kristen'
        ]);
        DB::table('layanans')->insert([
            'name' => 'Izin Operasional Nava Dhammasekha',
            'kategori' => 'Pelayanan Bidang Pendidikan',
            'tingkat_layanan' => 'Pusat',
            'subkategori' => '3',
            'deskripsi' => 'Pelayanan Izin Operasional Nava Dhammasekha'
        ]);
        DB::table('layanans')->insert([
            'name' => 'Izin Operasional Sekolah Minggu Buddha',
            'kategori' => 'Pelayanan Bidang Pendidikan',
            'tingkat_layanan' => 'Pusat',
            'subkategori' => '3',
            'deskripsi' => 'Pelayanan Izin Operasional Sekolah Minggu Buddha'
        ]);
    }
}
