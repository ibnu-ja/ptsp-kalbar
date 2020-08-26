<?php

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;

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
        // $this->call(LayananTataKelolaSeeder::class);
        // $this->call(LayananAgamaSeeder::class);
        // $this->call(LayananPendidikanSeeder::class);
        // $this->call(LayananHajiUmrahSeeder::class);
        // $this->call(LayananSertifikasiHalal::class);
        // buat role
        Role::create(['name' => 'admin']);
        Role::create(['name' => 'pimpinan']);
        Role::create(['name' => 'pejabat']);
        Role::create(['name' => 'petugas']);
        Role::create(['name' => 'operator']);
        Role::create(['name' => 'user']);
        //permohonan
        Permission::create(['name' => 'view permohonan']);
        Permission::create(['name' => 'add permohonan']);
        Permission::create(['name' => 'edit permohonan']);
        Permission::create(['name' => 'delete permohonan']);
        Permission::create(['name' => 'edit status permohonan']);
        //layanan
        Permission::create(['name' => 'view layanan']);
        Permission::create(['name' => 'add layanan']);
        Permission::create(['name' => 'edit layanan']);
        Permission::create(['name' => 'delete layanan']);
        //disposisi
        Permission::create(['name' => 'disposisi']);

        // tambahkan permission ke role admin
        $role = Role::find(1);
        $role->givePermissionTo('disposisi');

        $role->givePermissionTo('view permohonan');
        $role->givePermissionTo('add permohonan');
        $role->givePermissionTo('edit permohonan');
        $role->givePermissionTo('delete permohonan');

        $role->givePermissionTo('view layanan');
        $role->givePermissionTo('add layanan');
        $role->givePermissionTo('edit layanan');
        $role->givePermissionTo('delete layanan');

        $role->givePermissionTo('edit status permohonan');

        // tambah permission ke role pimpinan
        $role = Role::find(2);
        $role->givePermissionTo('disposisi');        
        $role->givePermissionTo('view permohonan');
        // $role->givePermissionTo('add permohonan');
        // $role->givePermissionTo('edit permohonan');
        // $role->givePermissionTo('delete permohonan');
        // $role->givePermissionTo('edit status permohonan');

        // tambah permission ke role operator
        $role = Role::find(5);
        $role->givePermissionTo('disposisi');        
        $role->givePermissionTo('view permohonan');
        $role->givePermissionTo('add permohonan');
        $role->givePermissionTo('view permohonan');
        // $role->givePermissionTo('edit permohonan');
        // $role->givePermissionTo('delete permohonan');
        // $role->givePermissionTo('edit status permohonan');

    }
}
