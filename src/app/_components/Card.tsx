"use client";

import { CartIcon } from "@/components/icons/Cart";
import { cn } from "@/lib/cn";
import { useCartStore } from "@/model/cartStore";
import Image from "next/image";
import { ComponentPropsWithRef } from "react";

export interface CardPropsType extends ComponentPropsWithRef<"div"> {
    id: string;
    image: string;
    title: string;
    price: number;
}

export const Card: React.FC<CardPropsType> = ({
    id,
    image,
    title,
    price, // Додаємо властивість price сюди
    className,
    ...rest
}) => {
    const addItem = useCartStore((state) => state.addItem);

    return (
        <div
            className={cn("max-w-[350px] bg-[#FFCFCF] p-4", className)}
            {...rest}
        >
            <div className="aspect-square">
                <Image
                    src={image}
                    alt={title}
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                    }}
                />
            </div>
            <div className="flex items-center justify-between mt-2">
                <div>
                    <p className="text-[20px]">{title}</p>
                </div>
                <div>
                    <p className="text-[20px]">{price}</p>
                </div>
                <div>
                    <button
                        onClick={() => {
                            addItem({
                                id: id,
                                name: title,
                                price, // Додаємо властивість price сюди
                                quantity: 1,
                                city: "",
                                packing: "",
                            });
                        }}
                        className="w-[40px] h-[40px] rounded-full border-black border flex items-center justify-center"
                    >
                        <CartIcon />
                    </button>
                </div>
            </div>
        </div>
    );
};
