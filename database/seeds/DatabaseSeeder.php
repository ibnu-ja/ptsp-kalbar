<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call(UsersTableSeeder::class);
        $this->call(LayananTataKelolaSeeder::class);
        $this->call(LayananAgamaSeeder::class);
        $this->call(LayananPendidikanSeeder::class);
        $this->call(LayananHajiUmrahSeeder::class);
        $this->call(LayananSertifikasiHalal::class);
    }
}
