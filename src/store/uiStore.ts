import {create} from 'zustand';

export interface UIState {
    darkMode: boolean;
    toggleDarkMode: () => void;
} 



export const useUIStore = create<UIState>((set) => ({
    darkMode: false,
    toggleDarkMode: () => set((state) => ({
        darkMode: !state.darkMode}))

}));



