import React from 'react';

const Navbar = ({ userType }) => {
  return (
    <nav>
      <ul>
        <li><a href="/">Home</a></li>

        {/* Mostrar enlaces diferentes dependiendo del tipo de usuario */}
        {userType === 'client' && (
          <li><a href="/client-dashboard">Client Dashboard</a></li>
        )}
        {userType === 'provider' && (
          <li><a href="/provider-dashboard">Provider Dashboard</a></li>
        )}
        {/* Si el userType no es ni 'client' ni 'provider', muestra un enlace por defecto */}
        {!['client', 'provider'].includes(userType) && (
          <li><a href="/default-dashboard">Default Dashboard</a></li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
