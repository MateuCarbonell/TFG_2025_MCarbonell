import React from "react";
import { Link, router } from '@inertiajs/react';
import { Button } from "@/components/ui/button";

const NavbarHome = () => {
    // Función para manejar el evento de cierre de sesión
    const handleLogout = () => {
        router.post(route('logout'), {}, {
            onSuccess: () => {
                window.location.reload(); // o router.visit('/login') si no querés recargar
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
                </ul>
                <div className="flex space-x-2">
                    <Button onClick={handleLogin} variant="secondary" className="text-white">Login</Button>
                    <Button onClick={handleRegister} className="text-white">Register</Button>
                    <Button onClick={handleLogout} variant="destructive" className="text-white">Logout</Button>
                </div>
            </div>
        </nav>
    );
};

export default NavbarHome;
