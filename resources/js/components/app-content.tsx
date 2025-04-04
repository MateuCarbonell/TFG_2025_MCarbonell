// src/components/app-content.tsx

import { ReactNode } from "react";

interface AppContentProps {
    children: ReactNode;
}

export const AppContent = ({ children }: AppContentProps) => {
    return (
        <div className="app-content">
            {children}
        </div>
    );
};
