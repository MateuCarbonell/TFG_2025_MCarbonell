import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Head, useForm } from "@inertiajs/react";
import { LoaderCircle } from "lucide-react";
import { FormEventHandler } from "react";

type UserType = "client" | "provider";

interface RegisterForm {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
    userType: UserType;
}

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm<Required<RegisterForm>>({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
        userType: 'client',
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('register'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    // Validación básica en el cliente
    const isFormValid = () => {
        return (
            data.name.trim() !== '' &&
            data.email.includes('@') &&
            data.password.length >= 8 &&
            data.password === data.password_confirmation &&
            (data.userType === "client" || data.userType === "provider")
        );
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-green-100">
            <div className="max-w-md w-full bg-white p-6 rounded-lg shadow-md">
                <Head title="Register" />
                <h1 className="text-2xl font-bold text-center mb-6 text-green-800">Create your account</h1>

                {Object.keys(errors).length > 0 && (
                    <div className="mb-4 p-4 bg-red-50 rounded-md">
                        <h2 className="text-red-600 font-medium">Please fix the following errors:</h2>
                        <ul className="list-disc list-inside text-red-500 text-sm mt-1">


                            {/* Render errors using map */}
                            {Object.entries(errors).map(([key, error]) => (
                                <li key={key}>{error}</li>
                            ))}

                        </ul>
                    </div>
                )}

                <form className="space-y-6" onSubmit={submit} noValidate>
                    <div className="space-y-4">
                        <div>
                            <Label htmlFor="name">
                                Name
                            </Label>
                            <Input
                                id="name"
                                type="text"
                                value={data.name}
                                onChange={(e) => setData('name', e.target.value)}
                                placeholder="Enter your name"
                                aria-invalid={!!errors.name}
                                aria-describedby="name-error"
                                required
                            />
                            {errors.name && (
                                <p id="name-error" className="text-sm text-red-500 mt-1">
                                    {errors.name}
                                </p>
                            )}
                        </div>

                        <div>
                            <Label htmlFor="email">
                                Email
                            </Label>
                            <Input
                                id="email"
                                type="email"
                                value={data.email}
                                onChange={(e) => setData('email', e.target.value)}
                                placeholder="Enter your email"
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
                            <Label htmlFor="password">
                                Password (min 8 characters)
                            </Label>
                            <Input
                                id="password"
                                type="password"
                                value={data.password}
                                onChange={(e) => setData('password', e.target.value)}
                                placeholder="Enter your password"
                                minLength={8}
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

                        <div>
                            <Label htmlFor="password_confirmation">
                                Confirm Password
                            </Label>
                            <Input
                                id="password_confirmation"
                                type="password"
                                value={data.password_confirmation}
                                onChange={(e) => setData('password_confirmation', e.target.value)}
                                placeholder="Confirm your password"
                                aria-invalid={!!errors.password_confirmation}
                                aria-describedby="password-confirmation-error"
                                required
                            />
                            {errors.password_confirmation && (
                                <p id="password-confirmation-error" className="text-sm text-red-500 mt-1">
                                    {errors.password_confirmation}
                                </p>
                            )}
                        </div>

                        <div>
                            <Label htmlFor="userType">
                                Account Type
                            </Label>
                            <select
                                id="userType"
                                value={data.userType}
                                onChange={(e) => setData('userType', e.target.value as UserType)}
                                className="block w-full mt-1 p-2 border rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
                                aria-invalid={!!errors.userType}
                                aria-describedby="userType-error"
                            >
                                <option value="client">Cliente</option>
                                <option value="provider">Proveedor</option>
                            </select>
                            {errors.userType && (
                                <p id="userType-error" className="text-sm text-red-500 mt-1">
                                    {errors.userType}
                                </p>
                            )}
                        </div>
                    </div>

                    <Button
                        type="submit"
                        className="w-full bg-green-600 hover:bg-green-700"
                        disabled={processing || !isFormValid()}
                        aria-disabled={processing || !isFormValid()}
                    >
                        {processing ? (
                            <>
                                <LoaderCircle className="animate-spin mr-2" />
                                Registrando...
                            </>
                        ) : (
                            'Register'
                        )}
                    </Button>

                    <p className="text-sm text-center text-gray-600">
                        Already have an account?{' '}
                        <a href={route('login')} className="text-green-600 hover:underline">
                            Sign in
                        </a>
                    </p>
                </form>
            </div>
        </div>
    );
}
