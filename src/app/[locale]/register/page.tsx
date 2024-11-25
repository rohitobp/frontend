"use client";
import { FormEvent, useState } from "react";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import AnimatedInput from "@/components/AnimatedInput";

export default function Register() {
    const t = useTranslations("LoginRegister");
    const router = useRouter();

    // State for form inputs and error handling
    const [nombre_usuario, setNombre_usuario] = useState("");
    const [contrasena, setContrasena] = useState("");
    const [nombre, setNombre] = useState("");
    const [apellidos, setApellidos] = useState("");
    const [correo, setCorreo] = useState("");

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const action = "register";

    // Handle form submission
    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        try {
            const res = await fetch("/api/auth", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ action, nombre, apellidos, correo, contrasena, nombre_usuario }),
            });

            if (res.ok) {
                router.push("/");
            } else {
                const { message } = await res.json();
                setError(("login.error"));
            }
        } catch (err) {
            setError(("login.serverError"));
        } finally {
            setLoading(false);
        }
    };

    return (
        <main className="flex flex-col items-center justify-center min-h-screen">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full max-w-sm">
                <AnimatedInput
                    name="nombre"
                    id="nombre"
                    label={("nombre")}
                    value={nombre}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNombre(e.target.value)}
                />
                <AnimatedInput
                    name="apellidos"
                    id="apellidos"
                    label={("apellidos")}
                    value={apellidos}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setApellidos(e.target.value)}
                />
                <AnimatedInput
                    name="correo"
                    id="correo"
                    label={("correo")}
                    value={correo}
                    type="email"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCorreo(e.target.value)}
                />
                <AnimatedInput
                    name="nombre_usuario"
                    id="nombre_usuario"
                    label={("nombre_usuario")}
                    value={nombre_usuario}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNombre_usuario(e.target.value)}
                />
                <AnimatedInput
                    name="contrasena"
                    id="contrasena"
                    label={("contrasena")}
                    value={contrasena}
                    type="password"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setContrasena(e.target.value)}
                />
                {error && <p className="text-red-500 text-sm">{error}</p>}
                <button type="submit" className="btn btn-neutral w-full" disabled={loading}>
                    {loading ? ("login.loading") : ("login.button")}
                </button>
            </form>
        </main>
    );
}