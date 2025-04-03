import React from 'react';
import Navbar from '../components/ui/Navbar'; // Ruta a tu archivo de Navbar

const Dashboard = ({ userType }) => {
  return (
    <div>
      {/* Incluye la Navbar en el Dashboard */}
      <Navbar userType={userType} />

      <h1>Welcome to the Dashboard</h1>

      {/* Contenido dependiendo del tipo de usuario */}
      {userType === 'client' && (
        <div>
          <p>You are a client.</p>
          {/* Aquí puedes agregar más contenido para los usuarios tipo 'client' */}
        </div>
      )}

      {userType === 'provider' && (
        <div>
          <p>You are a provider.</p>
          {/* Aquí puedes agregar más contenido para los usuarios tipo 'provider' */}
        </div>
      )}

      {/* Si el userType no es ni 'client' ni 'provider', muestra algo por defecto */}
      {!['client', 'provider'].includes(userType) && (
        <div>
          <p>Welcome, user!</p>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
