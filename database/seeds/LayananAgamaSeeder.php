<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class LayananAgamaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('layanans')->insert([
            'name' => 'Bantuan sinergi program lembaga dan keagamaan Buddha',
            'kategori' => 'Pelayanan Bidang Agama',
            'tingkat_layanan' => '',
            'subkategori' => '1',
            'deskripsi' => 'Bantuan sinergi program lembaga dan keagamaan Buddha'
        ]);
        DB::table('layanans')->insert([
            'name' => 'Bantuan Pembangunan Rumah Ibadah Islam',
            'kategori' => 'Pelayanan Bidang Agama',
            'tingkat_layanan' => 'Kanwil',
            'subkategori' => '1',
            'deskripsi' => 'Pelayanan permohonan bantuan pembangunan dan rehabilitasi rumah ibadah Islam'
        ]);
        DB::table('layanans')->insert([
            'name' => 'Bantuan Pembangunan Rumah Ibadah Kristen',
            'kategori' => 'Pelayanan Bidang Agama',
            'tingkat_layanan' => 'Pusat',
            'subkategori' => '1',
            'deskripsi' => 'Pelayanan permohonan bantuan pembangunan dan rehabilitasi rumah ibadah Kristen'
        ]);
        DB::table('layanans')->insert([
            'name' => 'Bantuan Pembangunan Rumah Ibadah Katolik',
            'kategori' => 'Pelayanan Bidang Agama',
            'tingkat_layanan' => 'Pusat',
            'subkategori' => '1',
            'deskripsi' => 'Pelayanan permohonan bantuan pembangunan dan rehabilitasi rumah ibadah Katolik'
        ]);
        DB::table('layanans')->insert([
            'name' => 'Bantuan Pembangunan Rumah Ibadah Hindu',
            'kategori' => 'Pelayanan Bidang Agama',
            'tingkat_layanan' => 'Pusat',
            'subkategori' => '1',
            'deskripsi' => 'Pelayanan permohonan bantuan pembangunan dan rehabilitasi rumah ibadah Hindu'
        ]);
        DB::table('layanans')->insert([
            'name' => 'Bantuan renovasi,rehabilitasi,dan pembanguan tempat Ibadah Buddha',
            'kategori' => 'Pelayanan Bidang Agama',
            'tingkat_layanan' => 'Pusat,Kanwil,Kakanmenag',
            'subkategori' => '1',
            'deskripsi' => 'Pelayanan permohonan bantuan renovasi,rehabilitasi,dan pembangunan tempat ibadah Buddha'
        ]);
        DB::table('layanans')->insert([
            'name' => 'Bantuan Pembangunan Rumah Ibadah Konghucu',
            'kategori' => 'Pelayanan Bidang Agama',
            'tingkat_layanan' => 'Pusat',
            'subkategori' => '1',
            'deskripsi' => 'Pelayanan permohonan bantuan pembangunan dan rehabilitasi rumah ibadah Konghucu'
        ]);
        DB::table('layanans')->insert([
            'name' => 'Bantuan Lembaga Keagamaan Buddha untuk Swayamvara Tripitaka Gatha',
            'kategori' => 'Pelayanan Bidang Agama',
            'tingkat_layanan' => 'Pusat,Kanwil,Kankemenag',
            'subkategori' => '1',
            'deskripsi' => 'Bantuan Lembaga Keagamaan Buddha untuk Swayamvara Tripitaka Gatha'
        ]);
        DB::table('layanans')->insert([
            'name' => 'Bantuan proses pensertifikatan rumah ibadah agama Buddha',
            'kategori' => 'Pelayanan Bidang Agama',
            'tingkat_layanan' => 'Pusat,Kanwil,Kankemenag',
            'subkategori' => '1',
            'deskripsi' => 'Bantuan proses pensertifikatan rumah ibadah agama Buddha'
        ]);
        DB::table('layanans')->insert([
            'name' => 'Bantuan Operasional Baznas Provinsi dan Bab/Kota',
            'kategori' => 'Pelayanan Bidang Agama',
            'tingkat_layanan' => 'Pusat,Kanwil,Kankemenag',
            'subkategori' => '1',
            'deskripsi' => 'Bantuan Operasional Baznas Provinsi dan Bab/Kota'
        ]);
        DB::table('layanans')->insert([
            'name' => 'Konsultasi Kerukunan Umat Beragama',
            'kategori' => 'Pelayanan Bidang Agama',
            'tingkat_layanan' => 'Pusat,Kanwil,Kankemenag',
            'subkategori' => '2',
            'deskripsi' => 'Pelayanan konsultasi dalam menangani isu-isu kerukunan umat beragama'
        ]);
        DB::table('layanans')->insert([
            'name' => 'Konsultasi Keluarga Sakinah,Nikah,dan Rujuk',
            'kategori' => 'Pelayanan Bidang Agama',
            'tingkat_layanan' => 'Pusat,Kanwil,Kankemenag',
            'subkategori' => '2',
            'deskripsi' => 'Pelayanan konsultasi dalam permasalahan keluarga,nikah,dan rujuk'
        ]);
        DB::table('layanans')->insert([
            'name' => 'Konsultasi Waris',
            'kategori' => 'Pelayanan Bidang Agama',
            'tingkat_layanan' => 'Pusat,Kanwil,Kankemenag',
            'subkategori' => '2',
            'deskripsi' => 'Pelayanan konsultasi waris'
        ]);
        DB::table('layanans')->insert([
            'name' => 'Konsultasi Zakat',
            'kategori' => 'Pelayanan Bidang Agama',
            'tingkat_layanan' => 'Pusat,Kanwil,Kankemenag',
            'subkategori' => '2',
            'deskripsi' => 'Pelayanan konsultasi zakat'
        ]);
        DB::table('layanans')->insert([
            'name' => 'Konsultasi Wakaf',
            'kategori' => 'Pelayanan Bidang Agama',
            'tingkat_layanan' => 'Pusat,Kanwil,Kankemenag',
            'subkategori' => '2',
            'deskripsi' => 'Pelayanan konsultasi wakaf'
        ]);
        DB::table('layanans')->insert([
            'name' => 'Konsultasi Mualaf',
            'kategori' => 'Pelayanan Bidang Agama',
            'tingkat_layanan' => 'Pusat,Kanwil,Kankemenag',
            'subkategori' => '2',
            'deskripsi' => 'Pelayanan konsultasi mualaf'
        ]);
        DB::table('layanans')->insert([
            'name' => 'Konsultasi Penyuluh Agama Islam',
            'kategori' => 'Pelayanan Bidang Agama',
            'tingkat_layanan' => 'Pusat,Kanwil,Kankemenag',
            'subkategori' => '2',
            'deskripsi' => 'Pelayanan konsultasi penyuluh agama Islam'
        ]);
        DB::table('layanans')->insert([
            'name' => 'Konsultasi Penyuluh Agama Kristen',
            'kategori' => 'Pelayanan Bidang Agama',
            'tingkat_layanan' => 'Pusat,Kanwil,Kankemenag',
            'subkategori' => '2',
            'deskripsi' => 'Pelayanan konsultasi penyuluh agama Kristen'
        ]);
        DB::table('layanans')->insert([
            'name' => 'Konsultasi Penyuluh Agama Katolik',
            'kategori' => 'Pelayanan Bidang Agama',
            'tingkat_layanan' => 'Pusat,Kanwil,Kankemenag',
            'subkategori' => '2',
            'deskripsi' => 'Pelayanan konsultasi penyuluh agama Katolik'
        ]);
        DB::table('layanans')->insert([
            'name' => 'Konsultasi Penyuluh Agama Hindu',
            'kategori' => 'Pelayanan Bidang Agama',
            'tingkat_layanan' => 'Pusat,Kanwil,Kankemenag',
            'subkategori' => '2',
            'deskripsi' => 'Pelayanan konsultasi penyuluh agama Hindu'
        ]);
        DB::table('layanans')->insert([
            'name' => 'Konsultasi Penyuluh Agama Buddha',
            'kategori' => 'Pelayanan Bidang Agama',
            'tingkat_layanan' => 'Pusat,Kanwil,Kankemenag',
            'subkategori' => '2',
            'deskripsi' => 'Pelayanan konsultasi penyuluh agama Buddha'
        ]);
        DB::table('layanans')->insert([
            'name' => 'Konsultasi Penyuluh Agama Konghucu',
            'kategori' => 'Pelayanan Bidang Agama',
            'tingkat_layanan' => 'Pusat,Kanwil,Kankemenag',
            'subkategori' => '2',
            'deskripsi' => 'Pelayanan konsultasi penyuluh agama Konghucu'
        ]);
        DB::table('layanans')->insert([
            'name' => 'Konsultasi Urusan Bimas Kristen',
            'kategori' => 'Pelayanan Bidang Agama',
            'tingkat_layanan' => 'Pusat,Kanwil,Kankemenag',
            'subkategori' => '2',
            'deskripsi' => 'Pelayanan konsultasi urusan agama Kristen'
        ]);
        DB::table('layanans')->insert([
            'name' => 'Konsultasi Urusan Bimas Katolik',
            'kategori' => 'Pelayanan Bidang Agama',
            'tingkat_layanan' => 'Pusat,Kanwil,Kankemenag',
            'subkategori' => '2',
            'deskripsi' => 'Pelayanan konsultasi urusan agama Katolik'
        ]);
        DB::table('layanans')->insert([
            'name' => 'Konsultasi Urusan Bimas Hindu',
            'kategori' => 'Pelayanan Bidang Agama',
            'tingkat_layanan' => 'Pusat,Kanwil,Kankemenag',
            'subkategori' => '2',
            'deskripsi' => 'Pelayanan konsultasi urusan agama Hindu'
        ]);
        DB::table('layanans')->insert([
            'name' => 'Konsultasi Urusan Bimas Buddha',
            'kategori' => 'Pelayanan Bidang Agama',
            'tingkat_layanan' => 'Pusat,Kanwil,Kankemenag',
            'subkategori' => '2',
            'deskripsi' => 'Pelayanan konsultasi urusan agama Buddha'
        ]);
        DB::table('layanans')->insert([
            'name' => 'Konsultasi Urusan Agama Konghucu',
            'kategori' => 'Pelayanan Bidang Agama',
            'tingkat_layanan' => 'Pusat,Kanwil,Kankemenag',
            'subkategori' => '2',
            'deskripsi' => 'Pelayanan konsultasi urusan agama Konghucu'
        ]);
        DB::table('layanans')->insert([
            'name' => 'Permohonan Rohaniawan Sumpah Jabatan',
            'kategori' => 'Pelayanan Bidang Agama',
            'tingkat_layanan' => 'Pusat,Kanwil,Kankemenag',
            'subkategori' => '3',
            'deskripsi' => 'Pelayanan penyediaan rohaniwan untuk proses sumpah jabatan pada instansi'
        ]);
        DB::table('layanans')->insert([
            'name' => 'Permohonan Penceramah Agama',
            'kategori' => 'Pelayanan Bidang Agama',
            'tingkat_layanan' => 'Pusat,Kanwil,Kankemenag',
            'subkategori' => '3',
            'deskripsi' => 'Pelayanan penyediaan penceramah agama Islam,Kristen,Katolik,Hindu,Budddha,dan Konghucu'
        ]);
        DB::table('layanans')->insert([
            'name' => 'Permohonan Pembaca Doa',
            'kategori' => 'Pelayanan Bidang Agama',
            'tingkat_layanan' => 'Pusat,Kanwil,Kankemenag',
            'subkategori' => '3',
            'deskripsi' => 'Pelayanan penyediaan pembaca doa untuk umat beraagama Islam,Kristen,Katolik,Hindu,Budddha,dan Konghucu'
        ]);
        DB::table('layanans')->insert([
            'name' => 'Pengukuran Arah Kiblat',
            'kategori' => 'Pelayanan Bidang Agama',
            'tingkat_layanan' => 'Kanwil',
            'subkategori' => '3',
            'deskripsi' => 'Pelayanan kalibrasi arah kiblat masjid dan mushalla'
        ]);
        DB::table('layanans')->insert([
            'name' => 'Permohonan Informasi Jadwal Imsakiah',
            'kategori' => 'Pelayanan Bidang Agama',
            'tingkat_layanan' => 'Pusat,Kanwil,Kankemenag,KUA',
            'subkategori' => '3',
            'deskripsi' => 'Pelayanan pemberian informasi jadwal shalat dan imsakiyah'
        ]);
        DB::table('layanans')->insert([
            'name' => 'Pelayanan Pencatatan Nikah/Rujuk',
            'kategori' => 'Pelayanan Bidang Agama',
            'tingkat_layanan' => 'KUA',
            'subkategori' => '3',
            'deskripsi' => 'Pelayanan pencatatan nikah dan rujuk'
        ]);
        DB::table('layanans')->insert([
            'name' => 'Permohonan Legalisir/Pengesahan Surat Nikah',
            'kategori' => 'Pelayanan Bidang Agama',
            'tingkat_layanan' => 'Pusat,Kanwil,Kankemenag,KUA',
            'subkategori' => '3',
            'deskripsi' => 'Pelayanan legalisis atau pengesahan salinan buku nikah'
        ]);
        DB::table('layanans')->insert([
            'name' => 'Permohonan Pengganti Buku Nikah',
            'kategori' => 'Pelayanan Bidang Agama',
            'tingkat_layanan' => 'KUA',
            'subkategori' => '3',
            'deskripsi' => 'Pelayanan penerbitan pengganti buku nikah'
        ]);
        DB::table('layanans')->insert([
            'name' => 'Rekomendasi Pendirian Rumah Ibadah Islam',
            'kategori' => 'Pelayanan Bidang Agama',
            'tingkat_layanan' => 'Kanwil,Kankemenag',
            'subkategori' => '3',
            'deskripsi' => 'Pelayanan penerbitan surat rekomedasi sebagai prasyarat dokumen perizinan mendirikan rumah ibadah umat Islam'
        ]);
        DB::table('layanans')->insert([
            'name' => 'Rekomendasi Pendirian Rumah Ibadah Kristen',
            'kategori' => 'Pelayanan Bidang Agama',
            'tingkat_layanan' => '',
            'subkategori' => '3',
            'deskripsi' => 'Pelayanan penerbitan surat rekomedasi sebagai prasyarat dokumen perizinan mendirikan rumah ibadah umat Kristen'
        ]);
        DB::table('layanans')->insert([
            'name' => 'Rekomendasi Pendirian Rumah Ibadah Katolik',
            'kategori' => 'Pelayanan Bidang Agama',
            'tingkat_layanan' => '',
            'subkategori' => '3',
            'deskripsi' => 'Pelayanan penerbitan surat rekomedasi sebagai prasyarat dokumen perizinan mendirikan rumah ibadah umat Katolik'
        ]);
        DB::table('layanans')->insert([
            'name' => 'Rekomendasi Pendirian Rumah Ibadah Hindu',
            'kategori' => 'Pelayanan Bidang Agama',
            'tingkat_layanan' => '',
            'subkategori' => '3',
            'deskripsi' => 'Pelayanan penerbitan surat rekomedasi sebagai prasyarat dokumen perizinan mendirikan rumah ibadah umat Hindu'
        ]);
        DB::table('layanans')->insert([
            'name' => 'Rekomendasi Pendirian Rumah Ibadah Buddha',
            'kategori' => 'Pelayanan Bidang Agama',
            'tingkat_layanan' => '',
            'subkategori' => '3',
            'deskripsi' => 'Pelayanan penerbitan surat rekomedasi sebagai prasyarat dokumen perizinan mendirikan rumah ibadah umat Buddha'
        ]);
        DB::table('layanans')->insert([
            'name' => 'Rekomendasi Pendirian Rumah Ibadah Konghucu',
            'kategori' => 'Pelayanan Bidang Agama',
            'tingkat_layanan' => '',
            'subkategori' => '3',
            'deskripsi' => 'Pelayanan penerbitan surat rekomedasi sebagai prasyarat dokumen perizinan mendirikan rumah ibadah umat Konghucu'
        ]);
        DB::table('layanans')->insert([
            'name' => 'Rekomendasi Pendirian Organisasi Kemasyarakatan Keagamaan',
            'kategori' => 'Pelayanan Bidang Agama',
            'tingkat_layanan' => 'Pusat,Kanwil',
            'subkategori' => '3',
            'deskripsi' => 'Pelayanan penerbitan surat rekomedaasi sebagai prasyarat dokumen dalam pendirian organisasi kemasyarakatan keagamaan'
        ]);
        DB::table('layanans')->insert([
            'name' => "Pentashihan Mushaf Al-Qur'an",
            'kategori' => 'Pelayanan Bidang Agama',
            'tingkat_layanan' => 'Pusat',
            'subkategori' => '3',
            'deskripsi' => "Pelayanan tashih mushaf Al-Qur'an sebelum dicetak dan diedaarkan ke masyarakat"
        ]);
        DB::table('layanans')->insert([
            'name' => 'Permohonan Izin Pendirian Lembaga Amil Zakat (LAZ)',
            'kategori' => 'Pelayanan Bidang Agama',
            'tingkat_layanan' => 'Pusat,Kanwil,Kankemenag',
            'subkategori' => '3',
            'deskripsi' => 'Pelayanan penerbitan izin pendirian Lembaga Amil Zakat (LAZ)'
        ]);
        DB::table('layanans')->insert([
            'name' => 'Permohonan Tanda Daftar Majelis Taklim',
            'kategori' => 'Pelayanan Bidang Agama',
            'tingkat_layanan' => 'Kanwil,Kankemenag',
            'subkategori' => '3',
            'deskripsi' => 'Pelayanan penerbitan tanda daftar bagi Majelis Taklim'
        ]);
        DB::table('layanans')->insert([
            'name' => 'Pendaftaran Tempat Ibadah Agama Buddha',
            'kategori' => 'Pelayanan Bidang Agama',
            'tingkat_layanan' => 'Pusat',
            'subkategori' => '3',
            'deskripsi' => 'Pelayanan penerbitan tanda daftar rumah ibadah umat Buddha (Vihara,Cetya,Arama,Padepokan)'
        ]);
        DB::table('layanans')->insert([
            'name' => 'Tanda Daftar Tempat Ibadah Tridharma (TITD)',
            'kategori' => 'Pelayanan Bidang Agama',
            'tingkat_layanan' => 'Pusat',
            'subkategori' => '3',
            'deskripsi' => 'Pelayanan penerbitan tanda daftar rumah ibadah Tridharma'
        ]);
        DB::table('layanans')->insert([
            'name' => 'Rekomendasi Ormas',
            'kategori' => 'Pelayanan Bidang Agama',
            'tingkat_layanan' => 'Pusat',
            'subkategori' => '3',
            'deskripsi' => 'Pelayanan penerbitan surat rekomendasi sebagai prasyarat dokumen pendirian Organisasi Kemasyarakatan Keagamaan'
        ]);
        DB::table('layanans')->insert([
            'name' => 'Pendaftaran Nazir Wakaf',
            'kategori' => 'Pelayanan Bidang Agama',
            'tingkat_layanan' => 'Pusat,Kanwil,Kankemenag',
            'subkategori' => '3',
            'deskripsi' => 'Pelayanan pendaftaran calon nazir wakaf'
        ]);
        DB::table('layanans')->insert([
            'name' => 'Rekomendasi Pembebanan bea masuk/atau cukai atas import,kiriman,atau hadiah',
            'kategori' => 'Pelayanan Bidang Agama',
            'tingkat_layanan' => 'Pusat',
            'subkategori' => '3',
            'deskripsi' => 'Rekomendasi Pembebanan bea masuk/atau cukai atas import,kiriman,atau hadiah'
        ]);
        DB::table('layanans')->insert([
            'name' => 'Rekomendasi Pembebasan Bea Perolehan Hak atas Tanah dan Bangunan',
            'kategori' => 'Pelayanan Bidang Agama',
            'tingkat_layanan' => 'Pusat',
            'subkategori' => '3',
            'deskripsi' => 'Rekomendasi Pembebasan Bea Perolehan Hak atas Tanah dan Bangunan'
        ]);
        DB::table('layanans')->insert([
            'name' => 'Rekomendasi penetapan Organisasi Keagamaan Buddha yang dapat memiliki Hak milik atas tanah',
            'kategori' => 'Pelayanan Bidang Agama',
            'tingkat_layanan' => 'Pusat',
            'subkategori' => '3',
            'deskripsi' => 'Rekomendasi penetapan Organisasi Keagamaan Buddha yang dapat memiliki Hak milik atas tanah'
        ]);
        DB::table('layanans')->insert([
            'name' => 'Rekomendasi Kegiatan Keagamaan Buddha Berskala Nasional dan Internasional',
            'kategori' => 'Pelayanan Bidang Agama',
            'tingkat_layanan' => 'Pusat',
            'subkategori' => '3',
            'deskripsi' => 'Rekomendasi Kegiatan Keagamaan Buddha Berskala Nasional dan Internasional'
        ]);
        DB::table('layanans')->insert([
            'name' => 'Rekomendasi Organisasi sebagai Organisasi Keagamaan Buddha',
            'kategori' => 'Pelayanan Bidang Agama',
            'tingkat_layanan' => 'Pusat',
            'subkategori' => '3',
            'deskripsi' => 'Rekomendasi Organisasi sebagai Organisasi Keagamaan Buddha'
        ]);
        DB::table('layanans')->insert([
            'name' => 'Pendaftaran Lembaga Keagamaan Buddha',
            'kategori' => 'Pelayanan Bidang Agama',
            'tingkat_layanan' => 'Pusat',
            'subkategori' => '3',
            'deskripsi' => 'Pelayanan penerbitan tanda daftar Lembaga Keagamaaan Buddha'
        ]);
        DB::table('layanans')->insert([
            'name' => 'Pendaftaran Yayasan Keagamaan Buddha',
            'kategori' => 'Pelayanan Bidang Agama',
            'tingkat_layanan' => 'Pusat',
            'subkategori' => '3',
            'deskripsi' => 'Pelayanan tanda daftar Yayasan Keagamaan Buddha'
        ]);
        DB::table('layanans')->insert([
            'name' => 'Pelayanan Kualitas Keluarga Sakinah',
            'kategori' => 'Pelayanan Bidang Agama',
            'tingkat_layanan' => '',
            'subkategori' => '3',
            'deskripsi' => 'Pelayanan Kualitas Keluarga Sakinah'
        ]);
        DB::table('layanans')->insert([
            'name' => 'Layanan Surat Keterangan Dokumen Kutipan Akta Nikah',
            'kategori' => 'Pelayanan Bidang Agama',
            'tingkat_layanan' => '',
            'subkategori' => '3',
            'deskripsi' => 'Layanan Surat Keterangan Dokumen Kutipan Akta Nikah'
        ]);
        DB::table('layanans')->insert([
            'name' => 'Layanan Pengembangan Kepenghuluan',
            'kategori' => 'Pelayanan Bidang Agama',
            'tingkat_layanan' => '',
            'subkategori' => '3',
            'deskripsi' => 'Layanan Pengembangan Kepenghuluan'
        ]);
        DB::table('layanans')->insert([
            'name' => 'Layanan Lomba Karya Tulis Ilmiah penghulu',
            'kategori' => 'Pelayanan Bidang Agama',
            'tingkat_layanan' => '',
            'subkategori' => '3',
            'deskripsi' => 'Layanan Lomba Karya Tulis Ilmiah penghulu'
        ]);
        DB::table('layanans')->insert([
            'name' => 'Layanan Penilaian Penyusun Angka Kredit Penghulu',
            'kategori' => 'Pelayanan Bidang Agama',
            'tingkat_layanan' => '',
            'subkategori' => '3',
            'deskripsi' => 'Layanan Penilaian Penyusun Angka Kredit Penghulu'
        ]);
    }
}
