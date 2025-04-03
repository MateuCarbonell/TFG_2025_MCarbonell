<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class DashboardController extends Controller
{
    /**
     * Muestra la vista principal del dashboard.
     *
     * @return \Inertia\Response
     */
    public function index()
    {
        // Obtener el tipo de usuario (client, provider, etc.) del usuario autenticado
        $userType = Auth::user()->userType;

        // Pasar el userType a la vista Inertia
        return Inertia::render('dashboard', [
            'userType' => $userType, // Pasamos el tipo de usuario al frontend
        ]);
    }
}
