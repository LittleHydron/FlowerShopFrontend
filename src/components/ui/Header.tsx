"use client";

import Link from "next/link";
import { LogoIcon } from "../icons/Logo";
import { Container } from "./Container";
import { CartIcon } from "@/components/icons/Cart";
import { UserIcon } from "@/components/icons/User";
import { useAuthStore } from "@/model/userStore";

export const Header = () => {
    const accessToken = useAuthStore((state) => state.accessToken);

    return (
        <header className="pt-4">
            <Container className="relative flex justify-end items-center">
                <div className="absolute left-1/2 translate-x-[-50%]">
                    <Link href="/">
                        <LogoIcon width={200} />
                    </Link>
                </div>
                <nav className="flex gap-2">
                    <Link
                        className="w-[50px] h-[50px] rounded-full border-black border flex items-center justify-center"
                        href="/cart"
                    >
                        <CartIcon />
                    </Link>
                    <Link
                        className="w-[50px] h-[50px] rounded-full border-black border flex items-center justify-center"
                        href={`${!!accessToken ? "/profile" : "/login"}`}
                    >
                        <UserIcon />
                    </Link>
                </nav>
            </Container>
        </header>
    );
};
