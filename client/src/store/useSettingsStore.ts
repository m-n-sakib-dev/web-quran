import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface SettingsState {
  arabicFont: string;
  arabicFontSize: number;
  translationFontSize: number;
  theme: 'light' | 'dark';
  setArabicFont: (font: string) => void;
  setArabicFontSize: (size: number) => void;
  setTranslationFontSize: (size: number) => void;
  toggleTheme: () => void;
}

export const useSettingsStore = create<SettingsState>()(
  persist(
    (set) => ({
      arabicFont: 'font-noto',
      arabicFontSize: 32,
      translationFontSize: 20,
      theme: 'light',
      setArabicFont: (font) => set({ arabicFont: font }),
      setArabicFontSize: (size) => set({ arabicFontSize: size }),
      setTranslationFontSize: (size) => set({ translationFontSize: size }),
      toggleTheme: () => set((state) => ({ theme: state.theme === 'light' ? 'dark' : 'light' })),
    }),
    { 
      name: 'quran-settings' 
    }
  )
);

