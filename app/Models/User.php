<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable {
    use HasApiTokens, HasFactory, Notifiable;

    // Los atributos que se pueden asignar en masa.
    protected $fillable = [
        'name',
        'email',
        'password',
        'userType', // Nuevo campo para tipo de usuario (cliente/proveedor)
    ];

    // Los atributos que deben ocultarse en arrays o JSON.
    protected $hidden = [
        'password',
        'remember_token',
    ];

    // Los atributos que deben ser convertidos a otro tipo.
    protected $casts = [
        'email_verified_at' => 'datetime',
        'password' => 'hashed', // Laravel 10+ soporta password hashing automático
    ];
}
