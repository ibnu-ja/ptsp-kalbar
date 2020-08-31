<?php

use App\User;
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
        $this->call(SuratMasukSeeder::class);
        // $this->call(LayananTataKelolaSeeder::class);
        // $this->call(LayananAgamaSeeder::class);
        // $this->call(LayananPendidikanSeeder::class);
        // $this->call(LayananHajiUmrahSeeder::class);
        // $this->call(LayananSertifikasiHalal::class);
        // buat role
        Role::create(['name' => 'admin']); //id 1
        Role::create(['name' => 'pimpinan']); //id 2
        Role::create(['name' => 'pejabat']); //3
        Role::create(['name' => 'petugas']); //4
        Role::create(['name' => 'operator']);
        Role::create(['name' => 'pegawai']);
        Role::create(['name' => 'user']);
        //basic permission        
        Permission::create(['name' => 'orderan']);
        Permission::create(['name' => 'layanan']);

        //orderan
        Permission::create(['name' => 'view orderan']);
        Permission::create(['name' => 'add orderan']);
        Permission::create(['name' => 'edit orderan']);
        Permission::create(['name' => 'delete orderan']);
        Permission::create(['name' => 'edit status orderan']);
        //layanan
        Permission::create(['name' => 'view layanan']);
        Permission::create(['name' => 'add layanan']);
        Permission::create(['name' => 'edit layanan']);
        Permission::create(['name' => 'delete layanan']);

        // tambahkan permission ke role admin
        $role = Role::find(1);
        $role->givePermissionTo('orderan'); //untuk tampil navbar orderan
        $role->givePermissionTo('layanan'); //untuk tampil navbar layanan

        $role->givePermissionTo('view orderan');
        $role->givePermissionTo('add orderan');
        $role->givePermissionTo('edit orderan');
        $role->givePermissionTo('delete orderan');

        $role->givePermissionTo('view layanan');
        $role->givePermissionTo('add layanan');
        $role->givePermissionTo('edit layanan');
        $role->givePermissionTo('delete layanan');

        $role->givePermissionTo('edit status orderan');

        // tambah permission ke role pimpinan
        $role = Role::find(2);
        $role->givePermissionTo('orderan');   
        $role->givePermissionTo('view orderan');
        // $role->givePermissionTo('add orderan');
        // $role->givePermissionTo('edit orderan');
        // $role->givePermissionTo('delete orderan');
        $role->givePermissionTo('edit status orderan');

        // tambah permission ke role pejabat
        $role = Role::find(3);        
        $role->givePermissionTo('orderan');     
        $role->givePermissionTo('view orderan');
        $role->givePermissionTo('add orderan');
        // $role->givePermissionTo('edit orderan');
        // $role->givePermissionTo('delete orderan');
        $role->givePermissionTo('edit status orderan');

        // tambah permission ke role petugas
        $role = Role::find(4);
        $role->givePermissionTo('orderan');  
        $role->givePermissionTo('view orderan');
        $role->givePermissionTo('add orderan');
        // $role->givePermissionTo('edit orderan');
        // $role->givePermissionTo('delete orderan');
        $role->givePermissionTo('edit status orderan');

        // tambah permission ke role operator
        $role = Role::find(5);        
        $role->givePermissionTo('orderan');   
        $role->givePermissionTo('view orderan');
        $role->givePermissionTo('add orderan');
        // $role->givePermissionTo('edit orderan');
        // $role->givePermissionTo('delete orderan');
        $role->givePermissionTo('edit status orderan');
        
        $user = User::find(1);
        $user->syncRoles(['admin']);
        $user = User::find(2);
        $user->syncRoles(['pimpinan', 'pegawai']);
        $user = User::find(3);
        $user->syncRoles(['pejabat', 'pegawai']);
        $user = User::find(4);
        $user->syncRoles(['petugas', 'pegawai']);

    }
}
