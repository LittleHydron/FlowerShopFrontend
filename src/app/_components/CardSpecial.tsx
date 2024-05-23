"use client";

import { cn } from "@/lib/cn";
import { CardPropsType } from "./Card";
import { CartIcon } from "@/components/icons/Cart";
import Image from "next/image";
import { useCartStore } from "@/model/cartStore";

export const CardSpecial: React.FC<CardPropsType> = ({
    id,
    image,
    title,
    price,
    className,
    ...rest
}) => {
    const addItem = useCartStore((state) => state.addItem);
    return (
        <div className={cn("max-w-[250px]", className)} {...rest}>
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
            <div className="flex justify-center mt-2">
                <p className="text-[18px]">{title}</p>
            </div>
            <div className="flex items-center justify-between mt-2 px-2">
                <div>
                    <p className="text-[20px]">{price}</p>
                </div>
                <div>
                    <button
                        onClick={() => {
                            const itemId = `${title}-${price}`;

                            addItem({
                                id: itemId,
                                name: title,
                                price,
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
