"use client";
import { useSettingsStore } from "@/store/useSettingsStore";
import { useTheme } from "next-themes";
import { useEffect, useState, ChangeEvent } from "react";

interface SettingsSidebarProps {
  onClose?: () => void;
}


export default function SettingsSidebar({ onClose }: SettingsSidebarProps) {
  const {
    arabicFont,
    setArabicFont,
    arabicFontSize,
    setArabicFontSize,
    translationFontSize,
    setTranslationFontSize,
  } = useSettingsStore();

  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div
      className="px-6"
    >
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-xl font-bold">Font Settings</h2>
        <button onClick={onClose} className="p-2 lg:hidden rounded-full cursor-pointer" type="button">
          ✕
        </button>
      </div>

      <div className="space-y-6">
        {/* Font Selection */}
        <div>
          <label className="block mb-2 font-medium">Arabic Font</label>
          <select
            value={arabicFont}
            onChange={(e: ChangeEvent<HTMLSelectElement>) => setArabicFont(e.target.value)}
            className="w-full p-2 border rounded"
          >
            <option value="">Amiri (Classic)</option>
            <option value="font-noto">Noto Naskh (Modern)</option>
          </select>
        </div>

        {/* Font Size Sliders - Note the Number() conversion */}
        <div>
          <label className="block mb-2 font-medium">
            Arabic Font Size ({arabicFontSize}px)
          </label>
          <input
            type="range"
            min="20"
            max="50"
            value={arabicFontSize}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setArabicFontSize(Number(e.target.value))}
            className="w-full cursor-pointer accent-primary1"
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">
            Translation Font Size ({translationFontSize}px)
          </label>
          <input
            type="range"
            min="16"
            max="30"
            value={translationFontSize}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setTranslationFontSize(Number(e.target.value))}
            className="w-full cursor-pointer accent-primary1"
          />
        </div>
      </div>
    </div>
  );
}
