import React from "react";
import { Link, router, usePage } from '@inertiajs/react';
import { Button } from "@/components/ui/button";

const NavbarHome = () => {
    // Obtener el usuario autenticado desde los props compartidos
    const { auth } = usePage().props as unknown as {
        auth: {
          user: {
            name: string;
            email: string;
            userType: string;
          } | null;
        };
      };
      

    // Funciones de navegación
    const handleLogout = () => {
        router.post(route('logout'), {}, {
            onSuccess: () => {
                window.location.reload(); 
                router.visit('/'); // redirigir al home después de logout
            },
        });
    };

    const handleRegister = () => {
        router.visit(route('register'));
    };

    const handleLogin = () => {
        router.visit(route('login'));
    };

    return (
        <nav className="bg-blue-600 p-4">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <div className="text-white font-bold text-lg">
                    <Link href="/">Service Platform</Link>
                </div>

                <ul className="flex space-x-6">
                    <li><Link href="/" className="text-white hover:text-gray-200">Home</Link></li>
                    <li><Link href="/about" className="text-white hover:text-gray-200">About</Link></li>

                    {/* Ejemplo: opciones según tipo de usuario */}
                    {auth.user?.userType === 'provider' && (
                        <li><Link href="/dashboard" className="text-white hover:text-gray-200">My Services</Link></li>
                    )}
                    {auth.user?.userType === 'client' && (
                        <li><Link href="/dashboard" className="text-white hover:text-gray-200">Services</Link></li>
                    )}
                </ul>

                <div className="flex space-x-2 items-center">
                    {auth.user ? (
                        <>
                            <span className="text-white">Hi, {auth.user.name}</span>
                            <Button onClick={handleLogout} variant="destructive" className="text-white">Logout</Button>
                        </>
                    ) : (
                        <>
                            <Button onClick={handleLogin} variant="secondary" className="text-white">Login</Button>
                            <Button onClick={handleRegister} className="text-white">Register</Button>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default NavbarHome;
