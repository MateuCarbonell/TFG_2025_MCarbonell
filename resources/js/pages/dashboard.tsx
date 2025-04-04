import Navbar from '@/components/ui/Navbar'; // Ruta a tu archivo de Navbar
const Dashboard = ({ userType }) => {
  return (
    <div>
      {/*   Navbar en el Dashboard */}
      <Navbar userType={userType} />

      <h1>Welcome to the Dashboard</h1>

      {/* Contenido dependiendo del tipo de usuario */}
      {userType === 'client' && (
        <div>
          <p>You are a client.</p>
          {/*  tipo 'client' */}
        </div>
      )}

      {userType === 'provider' && (
        <div>

          <p>You are a provider.</p>
          {/* tipo 'provider' */}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
