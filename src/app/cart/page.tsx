"use client";

import { Container } from "@/components/ui/Container";
import { playfairClassname } from "@/fonts/fonts";
import { cn } from "@/lib/cn";
import { Table } from "./_components/Table";
import Link from "next/link";
import { Item, useCartStore } from "@/model/cartStore";
import { ChangeEvent, useMemo, useState } from "react";

const packagingOptions = ["Упаковка 1", "Упаковка 2", "Упаковка 3"];

const CartPage = () => {
    const items = useCartStore((state) => state.items);

    const [city, setCity] = useState<string>("");
    const [packing, setPacking] = useState<string>("");

    return (
        <Container className="flex-1 flex flex-col items-center justify-center">
            <div className="w-full max-w-[1000px]">
                <p className={cn(playfairClassname, "text-[25px]")}>Кошик</p>
                <div className="w-full flex py-4">
                    <Table />
                </div>
                <div className="flex gap-4">
                    <select
                        value={packing || ""}
                        onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                            setPacking(e.target.value)
                        }
                        className="mr-4 px-3 py-2 border border-gray-300 rounded-md"
                    >
                        <option value="" disabled>
                            Оберіть упаковку
                        </option>
                        {packagingOptions.map((option, index) => (
                            <option key={index} value={option}>
                                {option}
                            </option>
                        ))}
                    </select>
                    <input
                        type="text"
                        value={city}
                        onChange={(e: ChangeEvent<HTMLInputElement>) =>
                            setCity(e.target.value)
                        }
                        placeholder="Введіть місто"
                        className="px-3 py-2 border border-gray-300 rounded-md"
                    />
                </div>

                <div className="flex justify-end gap-4 mt-4">
                    <Link
                        href="/"
                        className="border-none outline-none font-semibold px-4 py-2"
                    >
                        Повернутись до покупок
                    </Link>
                    <button
                        disabled={items.length === 0}
                        className={cn(
                            "border-none outline-none font-semibold bg-[#FF7B7B] rounded-md px-4 py-2 text-white",
                            {
                                "bg-gray-400 cursor-default":
                                    items.length === 0,
                            }
                        )}
                    >
                        Замовити
                    </button>
                </div>
            </div>
        </Container>
    );
};

export default CartPage;
