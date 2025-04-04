// src/components/app-shell.tsx

import { ReactNode } from "react";
import { AppSidebar } from "./app-sidebar"; // Asegúrate de importar el sidebar
import { AppSidebarHeader } from "./app-sidebar-header"; // Importa el header de sidebar
import { AppContent } from "./app-content"; // Importa el componente para el contenido

interface AppShellProps {
    children: ReactNode;
}

export const AppShell = ({ children }: AppShellProps) => {
    return (
        <div className="app-shell">
            <AppSidebar>
                <AppSidebarHeader /> {/* Aquí agregamos el header del sidebar */}
            </AppSidebar>

            {/* El contenido principal de la app */}
            <AppContent>{children}</AppContent>
        </div>
    );
};
