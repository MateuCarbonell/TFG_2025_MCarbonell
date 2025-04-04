<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Rating extends Model
{
    use HasFactory;

    // Definir la tabla 'ratings' si el nombre de la tabla no es el plural esperado
    protected $table = 'ratings';  // La tabla se llama 'rating', no 'ratings'

    // Definir los campos que son asignables en masa
    protected $fillable = [
        'userId', // ID del usuario que da la calificación
        'rating', // Valor de la calificación (por ejemplo, de 1 a 5)
        'comment', // Comentario del usuario
    ];

    // Relación con la tabla 'services'
    public function services()
    {
        return $this->hasMany(Service::class, 'rating_id');
    }

    // Relación con el modelo 'User' (deberías tener el modelo User también)
    public function user()
    {
        return $this->belongsTo(User::class, 'userId');
    }
}
