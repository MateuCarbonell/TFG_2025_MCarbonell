import React from "react";
import { Link, router } from '@inertiajs/react';
import { Button } from "@/components/ui/button";

const NavbarHome = () => {
  const handleLogout = () => {
    router.post('/logout');
  };

  return (
    <nav className="bg-blue-600 p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-lg">
          <Link href="/">Service Platform</Link>
        </div>
        <ul className="flex space-x-6">
          <li><Link href="/" className="text-white hover:text-gray-200">Home</Link></li>
          <li><Link href="/services" className="text-white hover:text-gray-200">Services</Link></li>
          <li><Link href="/about" className="text-white hover:text-gray-200">About</Link></li>
        </ul>
        <Button onClick={handleLogout} variant="destructive" className="text-white">Logout</Button>
      </div>
    </nav>
  );
};

export default NavbarHome; // Exportación por defecto
