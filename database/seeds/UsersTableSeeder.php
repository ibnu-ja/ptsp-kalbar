<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            'name' => 'Ibnu Jihad Aminuddin',
            'email' => 'ibnu.magang@gmail.com',
            'jabatan' => 'Admin PTSP',
            'kode_jabatan' => 'Kw.14',
            'password' => bcrypt('Psrj0737'),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);
        DB::table('users')->insert([
            'name' => 'Drs. H. Ridwansyah, M.Si.',
            'email' => 'ridwansyah@kemenag.test',
            'jabatan' => 'Kepala Kantor Wilayah Kementerian Agama Provinsi Kalimantan Barat',
            'nip' => '196710021994021001',
            'kode_jabatan' => 'Kw.14',
            'password' => bcrypt('Psrj0737'),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);
        DB::table('users')->insert([
            'name' => 'H. Rohadi, S.Ag., M.Si.',
            'email' => 'rohadi@kemenag.test',
            'jabatan' => 'Kepala Bagian Tata Usaha',
            'nip' => '197004301995031001',
            'kode_jabatan' => 'Kw.14.1',
            'password' => bcrypt('Psrj0737'),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);
        DB::table('users')->insert([
            'name' => 'Drs. Tukiman, M.Si.',
            'email' => 'tukiman@kemenag.test',
            'jabatan' => 'Kepala Subbagian Kepegawaian dan Hukum',
            'nip' => '196509161997031001',
            'kode_jabatan' => 'Kw.14.1.3',
            'password' => bcrypt('Psrj0737'),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);
    }
}
