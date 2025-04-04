<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Service;

class WelcomeController extends Controller
{
    public function index()
    {
        $services = Service::all(); // O cualquier lógica para obtener los servicios

        return Inertia::render('welcome', [
            'services' => $services
        ]);
    }
}
