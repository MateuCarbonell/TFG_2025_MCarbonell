import React from "react";
import { BellRing, Check } from "lucide-react"
import { cn } from "@/lib/utils"

import { Link, router } from "@inertiajs/react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Switch } from "@/components/ui/switch"

const notifications = [
  {
    title: "Your call has been confirmed.",
    description: "1 hour ago",
  },
  {
    title: "You have a new message!",
    description: "1 hour ago",
  },
  {
    title: "Your subscription is expiring soon!",
    description: "2 hours ago",
  },
]

// userType: 'client' | 'provider'
const DashboardPage = ({ userType }) => {
  const handleLogout = () => {
    router.post(route("logout"), {}, {
      onSuccess: () => {
        window.location.reload(); // o router.visit('/login')
      },
    });
  };

  return (
    <>
      {/* Navbar */}
      <nav className="bg-blue-600 p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-white font-bold text-lg">
            <Link href="/">Service Platform</Link>
          </div>
          <ul className="flex space-x-6 items-center">
            <li>
              <Link href="/" className="text-white hover:text-gray-200">Home</Link>
            </li>
            <li>
              <Button onClick={handleLogout} variant="destructive" className="text-white">Logout</Button>
            </li>
          </ul>
        </div>
      </nav>

      {/* Contenido principal */}
      <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
        {userType === "client" ? (
          <>
            <h1 className="text-4xl font-bold text-blue-800 mb-4">Mis Reservas</h1>
            <h2 className="text-3xl text-blue-600">Reservar Servicio</h2>

            <Card>

              <CardHeader>
                <CardTitle>Card Title</CardTitle>
                <CardDescription>Card Description</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Card Content</p>
              </CardContent>
              <CardFooter>
                <p>Card Footer</p>
              </CardFooter>
            </Card>
            
          </>

          
        ) : userType === "provider" ? (
          <>
            <h1 className="text-4xl font-bold text-green-800 mb-4">Mis Servicios</h1>
            <h2 className="text-3xl text-green-600">Agregar Servicio</h2>
          </>
        ) : (
          <h1 className="text-3xl text-red-600">Tipo de usuario no válido</h1>
        )}
      </main>
    </>
  );
};

export default DashboardPage;
