"use client";

import { Container } from "@/components/ui/Container";
import { CardList } from "./_components/CardList";
import { cn } from "@/lib/cn";
import { playfairClassname } from "../fonts/fonts";
import { FlowerInput } from "./_components/FlowerInput";
import { CardSpecialList } from "./_components/CardSpecialList";
import { bouqueteService } from "@/services/bouquetes.service";
import { useAuthStore } from "@/model/userStore";
import { ChangeEvent, useEffect, useState } from "react";
import { useCartStore } from "@/model/cartStore";
import { CardPropsType } from "./_components/Card";

const HomePage = () => {
    const accessToken = useAuthStore((state) => state.accessToken);
    const addCartItem = useCartStore((state) => state.addItem);

    const [bouquetes, setBouquetes] = useState<CardPropsType[]>([]);
    const [specialOffers, setSpecialOffers] = useState<CardPropsType[]>([]);
    const [newBouqueteName, setNewBouqueteName] = useState<string>("");

    useEffect(() => {
        bouqueteService.getAll(accessToken).then((data) => {
            const mappedBouquetes = data.map((b: any) => ({
                title: b.name,
                id: String(b.bouqueteId),
                image: "https://i5.walmartimages.com/asr/1e0e705d-5d7e-4d66-b097-154e0d57de20_1.8b97509e999445226c2726fc2a5dbae1.jpeg",
            }));

            setBouquetes(mappedBouquetes.slice(0, 4));
            setSpecialOffers(mappedBouquetes.slice(4, 8));
        });
    }, [accessToken]);

    const [newBouquete, setNewBouquete] = useState<{
        sunflower: number;
        daisy: number;
        lily: number;
        tulip: number;
        rose: number;
    }>({
        sunflower: 0,
        daisy: 0,
        lily: 0,
        tulip: 0,
        rose: 0,
    });

    return (
        <Container>
            <p className={cn("text-[25px]", playfairClassname)}>Каталог</p>
            <CardList className="mt-4" items={bouquetes} />
            <p
                className={cn(
                    "text-[25px] mt-10 w-full text-center",
                    playfairClassname
                )}
            >
                Зібрати букет на замовлення
            </p>
            <div>
                <div className="flex justify-center gap-4 mt-4">
                    <FlowerInput
                        onChange={(val: number, key: string) => {
                            setNewBouquete((prev) => ({ ...prev, [key]: val }));
                        }}
                        name="Троянди"
                        key="sunflower"
                    />
                    <FlowerInput
                        onChange={(val: number, key: string) => {
                            setNewBouquete((prev) => ({ ...prev, [key]: val }));
                        }}
                        name="Троянди"
                        key="daisy"
                    />
                    <FlowerInput
                        onChange={(val: number, key: string) => {
                            setNewBouquete((prev) => ({ ...prev, [key]: val }));
                        }}
                        name="Троянди"
                        key="lily"
                    />
                    <FlowerInput
                        onChange={(val: number, key: string) => {
                            setNewBouquete((prev) => ({ ...prev, [key]: val }));
                        }}
                        name="Троянди"
                        key="tulip"
                    />
                    <FlowerInput
                        onChange={(val: number, key: string) => {
                            setNewBouquete((prev) => ({ ...prev, [key]: val }));
                        }}
                        name="Троянди"
                        key="rose"
                    />
                </div>
                <div className="mt-4">
                    <input
                        type="text"
                        value={newBouqueteName}
                        onChange={(e: ChangeEvent<HTMLInputElement>) =>
                            setNewBouqueteName(e.target.value)
                        }
                        placeholder="Введіть назву букета"
                        className="px-3 py-2 border border-gray-300 rounded-md"
                    />
                </div>
                <div className="flex justify-center mt-4">
                    <button
                        onClick={() => {
                            bouqueteService
                                .add(accessToken, newBouqueteName)
                                // @ts-ignore
                                .then((data) =>
                                    addCartItem({
                                        id: String(data.bouqueteId),
                                        name: data.name,
                                        quantity: 1,
                                    })
                                );
                        }}
                        className="px-2 py-1 border border-black rounded-md"
                    >
                        Додати до корзини
                    </button>
                </div>
            </div>
            <p
                className={cn(
                    "text-[25px] mt-10 text-center w-full",
                    playfairClassname
                )}
            >
                Спеціальні пропозиції
            </p>
            <CardSpecialList className="mt-4" items={specialOffers} />
        </Container>
    );
};

export default HomePage;
