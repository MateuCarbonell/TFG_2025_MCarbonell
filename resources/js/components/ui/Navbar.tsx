import React from "react";
import { router } from '@inertiajs/react';
import { Button } from "@/components/ui/button";

const Navbar = ({ userType }) => {
  const handleLogout = () => {
    router.post('/logout');
  };

  return (
    <nav>
      <ul>
        <li><a href="/">Home</a></li>

        {/* Mostrar enlaces diferentes dependiendo del tipo de usuario */}
        {userType === "client" && (
          <li><a href="/client-dashboard">Client Dashboard</a></li>
        )}

        {userType === "provider" && (
          <li><a href="/provider-dashboard">Provider Dashboard</a></li>
        )}

        {/* Botón de Logout con Inertia */}
        <li>
          <Button onClick={handleLogout} variant="destructive">
            Logout
          </Button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
