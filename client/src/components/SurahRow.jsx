"use client";
import { useRouter } from "next/navigation";
import SettingsWrapper from "@/components/SettingsWrapper";

export default function SurahRow({ surah }) {
  const router = useRouter();

  const handleRowClick = () => {
    router.push(`/surah/${surah.id}`);
  };

  return (
    <tr
      onClick={handleRowClick}
      className="hover:bg-gray-100 cursor-pointer transition-colors dark:hover:bg-gray-100"
    >
      <td>
        <SettingsWrapper type="translation">{surah.number}</SettingsWrapper>
      </td>
      <td dir="rtl">
        <SettingsWrapper type="arabic">{surah.name_ar}</SettingsWrapper>
      </td>
      <td>
        <SettingsWrapper type="translation">{surah.name_en}</SettingsWrapper>
      </td>
    </tr>
  );
}
