import React, { useState } from "react";
import { useForm } from "@inertiajs/react";

export default function LoginForm() {
    const { data, setData, post, processing, errors } = useForm({
        email: "",
        password: "",
    });

    const submit = (e) => {
        e.preventDefault();
        post(route("login"));
    };

    return (
        <div>
            <form onSubmit={submit}>
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        value={data.email}
                        onChange={(e) => setData("email", e.target.value)}
                        required
                    />
                    {errors.email && <p>{errors.email}</p>}
                </div>

                <div>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={data.password}
                        onChange={(e) => setData("password", e.target.value)}
                        required
                    />
                    {errors.password && <p>{errors.password}</p>}
                </div>

                <button type="submit" disabled={processing}>
                    {processing ? "Logging in..." : "Login"}
                </button>
            </form>
        </div>
    );
}
