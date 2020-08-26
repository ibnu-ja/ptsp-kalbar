<?php

namespace App;

use Spatie\Permission\Models\Role;

class RoleExt extends Role
{
    protected $hidden = ['pivot', 'created_at', 'updated_at'];
}
