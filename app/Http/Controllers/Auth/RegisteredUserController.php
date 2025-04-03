<?php


namespace App\Http\Controllers\Auth;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;

class RegisteredUserController extends Controller
{
    public function create()
    {
        // Lógica para mostrar el formulario de registro
        return inertia('auth/register');
    }

    public function store(Request $request)
    {
         $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:8|confirmed',
            'userType' => 'required|in:client,provider',
        ]);


        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'userType' => $request->userType, // Guardar el tipo de usuario
        ]);

        // Lógica para autenticar al usuario
        Auth::login($user);

        return redirect()->route('home'); // Redirige al home o dashboard
    }
}
