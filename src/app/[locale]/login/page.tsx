"use client";
import { FormEvent, useState } from "react";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import AnimatedInput from "@/components/AnimatedInput";

export default function Login() {
    const t = useTranslations("LoginRegister");
    const router = useRouter();

    // State for form inputs and error handling
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");


    const action = "login";

    // Handle form submission
    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        try {
            const res = await fetch("/api/auth", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ action, username, password }),
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
                    name="username"
                    id="username"
                    label={t("username")}
                    value={username}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)}
                />
                <AnimatedInput
                    name="password"
                    id="password"
                    type="password"
                    label={t("password")}
                    value={password}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                />
                {error && <p className="text-red-500 text-sm">{error}</p>}
                <button type="submit" className="btn btn-neutral w-full" disabled={loading}>
                    {loading ? t("login.loading") : t("login.button")}
                </button>
            </form>
        </main>
    );
}