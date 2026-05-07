"use client";
import { useRouter } from "next/navigation";
import SettingsWrapper from "@/components/SettingsWrapper";

// 1. Define the Surah data structure
interface Surah {
  id: number | string;
  number: number;
  name_ar: string;
  name_en: string;
}

interface SurahRowProps {
  surah: Surah;
}

export default function SurahRow({ surah }: SurahRowProps) {
  const router = useRouter();

  const handleRowClick = (): void => {
    router.push(`/surah/${surah.id}`);
  };

  return (
    <tr
      onClick={handleRowClick}
      className="hover:bg-gray-200 cursor-pointer transition-colors"
    >
      <td className="py-1">
        <SettingsWrapper type="translation">
          {surah.number}
        </SettingsWrapper>
      </td>
      <td dir="rtl">
        <SettingsWrapper type="arabic">
          {surah.name_ar}
        </SettingsWrapper>
      </td>
      <td>
        <SettingsWrapper type="translation">
          {surah.name_en}
        </SettingsWrapper>
      </td>
    </tr>
  );
}
