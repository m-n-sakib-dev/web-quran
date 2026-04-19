import React from "react";
import { API_BASE_URL } from "@/utils/api";
import SettingsWrapper from "@/components/SettingsWrapper";
import AyahSearch from "@/components/AyahSearch";

export async function generateStaticParams() {

  return Array.from({ length: 114 }, (_, i) => ({
    id: (i + 1).toString(),
  }));
}


async function getSurahDetails(id) {
  const res = await fetch(`${API_BASE_URL}/api/surah/${id}`);

  return res.json();
}

export default async function SurahDetailPage({ params }) {
  const { id } = await params;
  const surah = await getSurahDetails(id);

  if (!surah || !surah.info) {
    return <div className="text-center p-10">Surah not found or API error.</div>;
  }

  return (
    <div className="max-w-250 mx-auto ">

      <AyahSearch info={surah.info} ayahs={surah.ayahs || []} />

    </div>
  );
}
