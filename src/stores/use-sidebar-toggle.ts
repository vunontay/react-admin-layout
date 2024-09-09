import { create } from "zustand";

interface ISidebarToggle {
    toggleCollapse: boolean;
    invokeToggleCollapse: () => void;
}

export const useSidebarToggle = create<ISidebarToggle>((set, get) => ({
    toggleCollapse: false,
    invokeToggleCollapse: () => set({ toggleCollapse: !get().toggleCollapse }),
}));
