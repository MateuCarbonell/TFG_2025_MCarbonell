// Boton para luego importar en Navbar.tsx
import { Button } from '@/components/ui/button';
import { usePage } from '@inertiajs/react';
import { useEffect } from 'react';

export default function Logout() {
    const { userType } = usePage().props; // Obtener el userType desde los props de la página

    useEffect(() => {
        console.log('userType:', userType); // Verificar el valor de userType
    }, [userType]);

    return (
        <Button variant="destructive" className="w-full" onClick={() => console.log('Logout clicked')}>
            Logout
        </Button>
    );
}

