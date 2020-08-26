<?php

namespace App;

use Spatie\Permission\Models\Permission;

class PermissionExt extends Permission
{
    protected $hidden = ['pivot', 'created_at', 'updated_at'];
}
