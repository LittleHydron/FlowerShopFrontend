import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface AuthState {
    accessToken: string;
    setAccessToken: (token: string) => void;
}

export const useAuthStore = create<AuthState>(
    // @ts-ignore
    persist(
        (set) => ({
            accessToken: "",
            setAccessToken: (token: string) => set({ accessToken: token }),
        }),
        {
            name: "auth-storage", // Назва для localStorage
            storage: createJSONStorage(() => localStorage),
        }
    )
);
