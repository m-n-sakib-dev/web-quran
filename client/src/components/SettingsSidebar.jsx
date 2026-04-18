"use client";
import { useSettingsStore } from "@/store/useSettingsStore";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function SettingsSidebar({ isOpen, onClose }) {
  const {
    arabicFont,
    setArabicFont,
    arabicFontSize,
    setArabicFontSize,
    translationFontSize,
    setTranslationFontSize,
  } = useSettingsStore();

  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div
      className={`fixed inset-y-0 right-0 w-72 shadow-2xl transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } transition-transform duration-300 ease-in-out p-6 z-50 bg-white`}
    >
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-xl font-bold">Settings</h2>
        <button onClick={onClose} className="p-2 rounded-full cursor-pointer">
          ✕
        </button>
      </div>

      <div className="space-y-6">
        {/* Font Selection */}
        <div>
          <label className="block mb-2 font-medium">Arabic Font</label>
          <select
            value={arabicFont}
            onChange={(e) => setArabicFont(e.target.value)}
            className="w-full p-2 border rounded "
          >
            <option value="font-amiri">Amiri (Classic)</option>
            <option value="font-noto">Noto Naskh (Modern)</option>
          </select>
        </div>

        {/* Font Size Sliders */}
        <div>
          <label className="block mb-2 font-medium">
            Arabic Text Size ({arabicFontSize}px)
          </label>
          <input
            type="range"
            min="20"
            max="40"
            value={arabicFontSize}
            onChange={(e) => setArabicFontSize(e.target.value)}
            className="w-full cursor-pointer"
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">
            English Text Size ({translationFontSize}px)
          </label>
          <input
            type="range"
            min="16"
            max="30"
            value={translationFontSize}
            onChange={(e) => setTranslationFontSize(e.target.value)}
            className="w-full cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}
