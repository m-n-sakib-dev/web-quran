import React from "react";
import { API_BASE_URL } from "@/utils/api";
import SurahRow from "@/components/SurahRow";
import SettingsWrapper from "@/components/SettingsWrapper";

async function getSurahDetails(id) {
  const res = await fetch(`${API_BASE_URL}/api/surah/${id}`);

  return res.json();
}

export default async function SurahDetailPage({ params }) {
  const { id } = await params;
  const surah = await getSurahDetails(id);

  return (
    <div className="max-w-250 mx-auto rounded-2xl overflow-hidden border">
      <div className="bg-gray-400">
        <div className="text-center text-[34px]">{surah.info.name_ar}</div>
        <div className="text-center text-[24px]">{surah.info.name_en}</div>
      </div>
      {(surah.ayahs || []).map((ayah) => (
        <div className="p-4 border-t" key={ayah.number_in_surah}>
          <p className="text-right">
            <SettingsWrapper type="arabic">{ayah.text}</SettingsWrapper>
          </p>
          <p className="mt-2">
            <SettingsWrapper type="translation">{ayah.data}</SettingsWrapper>
          </p>
        </div>
      ))}

    </div>
  );
}
