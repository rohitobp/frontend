"use client";
import { FormEvent, useState } from "react";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import AnimatedInput from "@/components/AnimatedInput";

export default function Login() {
    const t = useTranslations("LoginRegister");
    const router = useRouter();

    // State for form inputs and error handling
    const [correo, setCorreo] = useState("");
    const [contrasena, setContrasena] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");


    const action = "login";

    // Handle form submission
    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        console.log(action,correo,contrasena);
        try {
            const res = await fetch("/api/auth", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ action, correo, contrasena }),
            });

            if (res.ok) {
                router.push("/");
            } else {
                const { message } = await res.json();
                setError( t("login.error"));
            }
        } catch (err) {
            setError(t("login.serverError"));
        } finally {
            setLoading(false);
        }
    };

    return (
        <main className="flex flex-col items-center justify-center min-h-screen">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full max-w-sm">
                <AnimatedInput
                    name="correo"
                    id="correo"
                    label={t("correo")}
                    type="email"
                    value={correo}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCorreo(e.target.value)}
                />
                <AnimatedInput
                    name="contrasena"
                    id="contrasena"
                    type="password"
                    label={t("contrasena")}
                    value={contrasena}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setContrasena(e.target.value)}
                />
                {error && <p className="text-red-500 text-sm">{error}</p>}
                <button type="submit" className="btn btn-neutral w-full" disabled={loading}>
                    {loading ? t("login.loading") : t("login.button")}
                </button>
            </form>
        </main>
    );
}