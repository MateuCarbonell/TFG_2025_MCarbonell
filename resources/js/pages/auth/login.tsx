import React from "react";
import { router, useForm } from "@inertiajs/react";
import { Head } from "@inertiajs/react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export default function LoginForm() {
    const { data, setData, post, processing, errors } = useForm({
        email: "",
        password: "",
    });

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        post(route("login"));
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-green-100">
            <div className="max-w-md w-full bg-white p-6 rounded-lg shadow-md">
                <Head title="Login" />
                {Object.keys(errors).length > 0 && (
                    <div className="mb-4 p-4 bg-red-50 rounded-md">
                        <h2 className="text-red-600 font-medium">Usuario o contraseña incorrectos</h2>
                        <ul className="list-disc list-inside text-red-500 text-sm mt-1">
                            {Object.entries(errors).map(([key, error]) => (
                                <li key={key}>{error}</li>
                            ))}
                        </ul>
                    </div>
                )}

                <h1 className="text-2xl font-bold text-center mb-6 text-green-800">Login</h1>
                <form className="space-y-6" onSubmit={submit} noValidate>
                    <div>
                        <Label htmlFor="email">Correo Electrónico</Label>
                        <Input
                            id="email"
                            type="email"
                            value={data.email}
                            onChange={(e) => setData("email", e.target.value)}
                            placeholder="Ingresa tu correo"
                            aria-invalid={!!errors.email}
                            aria-describedby="email-error"
                            required
                        />
                        {errors.email && (
                            <p id="email-error" className="text-sm text-red-500 mt-1">
                                {errors.email}
                            </p>
                        )}
                    </div>

                    <div>
                        <Label htmlFor="password">Contraseña</Label>
                        <Input
                            id="password"
                            type="password"
                            value={data.password}
                            onChange={(e) => setData("password", e.target.value)}
                            placeholder="Ingresa tu contraseña"
                            aria-invalid={!!errors.password}
                            aria-describedby="password-error"
                            required
                        />
                        {errors.password && (
                            <p id="password-error" className="text-sm text-red-500 mt-1">
                                {errors.password}
                            </p>
                        )}
                    </div>

                    <button
                        type="submit"
                        disabled={processing}
                        className="w-full bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 disabled:opacity-50"
                    >
                        {processing ? "Iniciando sesión..." : "Iniciar Sesión"}
                    </button>
                    <div>
                        <p className="text-center text-sm text-gray-600">
                            ¿No tienes una cuenta?{" "}
                            <a href={route("register")} className="text-green-600 hover:underline">
                                Regístrate aquí
                            </a>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
}
