"use client";

import { useEffect, useState } from "react";

const cardTypes = ["Gold", "Бонусна", "Соціальна"];

interface CardSwitchPropsType {
    defaultValue: string;
}

export const CardSwitch: React.FC<CardSwitchPropsType> = ({ defaultValue }) => {
    const [cardType, setCardType] = useState<string>(defaultValue);
    const unusedCardTypes = cardTypes.filter((type) => type !== cardType);

    useEffect(() => {
        setCardType(defaultValue);
    }, [defaultValue]);

    return (
        <div>
            <div className="flex items-center justify-between">
                <p className="font-semibold">
                    Картка
                    <br /> клієнта
                </p>
                <p className="text-[#717171]">{cardType}</p>
            </div>
            <div className="flex items-center gap-10 mt-2">
                <p className="text-[#303037] font-semibold">Змінити на:</p>
                <button
                    onClick={() => setCardType(unusedCardTypes[0])}
                    className="border-none p-0 outine-none underline text-[#303037] font-semibold"
                >
                    {unusedCardTypes[0]}
                </button>
                <button
                    onClick={() => setCardType(unusedCardTypes[1])}
                    className="border-none p-0 outine-none underline text-[#303037] font-semibold"
                >
                    {unusedCardTypes[1]}
                </button>
            </div>
        </div>
    );
};
