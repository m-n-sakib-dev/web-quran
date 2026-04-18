import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useSettingsStore = create(
  persist(
    (set) => ({
      arabicFont: 'font-amiri', // Default class
      arabicFontSize: 32,
      translationFontSize: 16,
      setArabicFont: (font) => set({ arabicFont: font }),
      setArabicFontSize: (size) => set({ arabicFontSize: size }),
      setTranslationFontSize: (size) => set({ translationFontSize: size }),
    }),
    { name: 'quran-settings' } 
  )
);
