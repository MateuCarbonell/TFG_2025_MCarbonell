<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Service extends Model
{
    use HasFactory;

    // Definir la tabla si el nombre no es plural (aunque Laravel usa plural por defecto)
    protected $table = 'services';

    // Definir los campos que son asignables en masa
    protected $fillable = [
        'name',
        'description',
        'price',
        'available',
        'rating_id',
    ];

    // Definir la relación con la tabla rating
    public function rating()
    {
        return $this->belongsTo(Rating::class, 'rating_id');
    }
}
