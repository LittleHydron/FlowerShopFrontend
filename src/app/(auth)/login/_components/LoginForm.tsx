"use client";

import { useAuthStore } from "@/model/userStore";
import { authService } from "@/services/auth.service";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState, FormEvent } from "react";

interface FormData {
    email: string;
    password: string;
}

export const LoginForm: React.FC = () => {
    const router = useRouter();

    const accessToken = useAuthStore((state) => state.accessToken);
    console.log(accessToken);

    const setUserToken = useAuthStore((state) => state.setAccessToken);

    const [formData, setFormData] = useState<FormData>({
        email: "",
        password: "",
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        console.log(formData);

        authService
            .login({
                email: formData.email,
                password: formData.password,
            })
            .then((token) => setUserToken(token))
            .then(() => router.push("/"));
    };

    return (
        <div className="w-[400px] bg-white text-black flex items-center justify-center h-screen">
            <div className="p-8 border border-gray-300 rounded-lg w-full mx-auto">
                <form onSubmit={handleSubmit} className="w-full">
                    <div className="mb-4">
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Пошта
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="password"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Пароль
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            required
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            value={formData.password}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="flex justify-end">
                        <button
                            type="submit"
                            className="px-6 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Увійти
                        </button>
                    </div>
                    <div className="flex justify-end mt-4">
                        <Link
                            href="/register"
                            className="text-sm text-indigo-600"
                        >
                            Створити аккаунт
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
};
