import { create } from "zustand";

interface IUser {
    token: string | null;
    user: unknown;
    setToken: (token: string) => void;
    setUser: (user: unknown) => void;
}

export const useSidebarToggle = create<IUser>((set) => ({
    token: null,
    user: null,
    setToken: (token: string) => set(() => ({ token })),
    setUser: (user: unknown) => set(() => ({ user })),
}));
