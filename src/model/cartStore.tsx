import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export interface Item {
    id: string;
    name: string;
    quantity: number;
    price: number;
    city: string;
    packing: string;
}

interface StoreState {
    items: Item[];
    addItem: (item: Item) => void;
    removeItem: (id: string) => void;
    updateItem: (id: string, updatedFields: Partial<Item>) => void;
}

export const useCartStore = create<StoreState>(
    // @ts-ignore
    persist(
        (set) => ({
            items: [],
            addItem: (item: Item) =>
                set((state) => ({
                    items: [...state.items, item],
                })),
            removeItem: (id: string) =>
                set((state) => ({
                    items: state.items.filter((item) => item.id !== id),
                })),
            updateItem: (id: string, updatedFields: Partial<Item>) =>
                set((state) => ({
                    items: state.items.map((item) =>
                        item.id === id ? { ...item, ...updatedFields } : item
                    ),
                })),
        }),
        {
            name: "item-storage",
            storage: createJSONStorage(() => localStorage),
        }
    )
);
