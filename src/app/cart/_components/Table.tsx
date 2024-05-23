"use client";

import { TrashIcon } from "@/components/icons/Trash";
import { useCartStore } from "@/model/cartStore";
import { useMemo, useState } from "react";

interface RowProps {
    id: string;
    name: string;
    quantity: number;
}

const Row: React.FC<RowProps> = ({ id, name, quantity }) => {
    const deleteItem = useCartStore((state) => state.removeItem);

    return (
        <tr>
            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                {name}
            </td>
            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                {quantity}
            </td>
            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                <button
                    onClick={() => deleteItem(id)}
                    className="text-red-500 hover:text-red-700"
                >
                    <TrashIcon width={20} />
                </button>
            </td>
        </tr>
    );
};

interface Item {
    id: number;
    name: string;
    quantity: number;
    price: number;
}

export const Table = () => {
    const items = useCartStore((state) => state.items);

    return (
        <div className="overflow-x-auto w-full">
            <table className="w-full bg-white border border-gray-200">
                <thead>
                    <tr>
                        <th className="px-6 py-3 border-b-2 border-gray-200 text-left text-xs leading-4 text-gray-600 uppercase tracking-wider">
                            Товар
                        </th>
                        <th className="px-6 py-3 border-b-2 border-gray-200 text-left text-xs leading-4 text-gray-600 uppercase tracking-wider">
                            К-сть
                        </th>
                        <th className="px-6 py-3 border-b-2 border-gray-200 text-left text-xs leading-4 text-gray-600 uppercase tracking-wider">
                            Додаткові опції
                        </th>
                        <th className="px-6 py-3 border-b-2 border-gray-200"></th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item) => (
                        <Row
                            key={item.id}
                            id={item.id}
                            name={item.name}
                            quantity={item.quantity}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    );
};
