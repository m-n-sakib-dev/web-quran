import React from "react";
import { API_BASE_URL } from "@/utils/api";
import AyahSearch from "@/components/AyahSearch";

// 1. Define the interfaces for the API response
interface Ayah {
  number_in_surah: number;
  text: string;
  data: string;
}

interface SurahInfo {
  name_ar: string;
  name_en: string;
}

interface SurahDetails {
  info: SurahInfo;
  ayahs: Ayah[];
}

// 2. Define the types for Next.js Page Props
interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return Array.from({ length: 114 }, (_, i) => ({
    id: (i + 1).toString(),
  }));
}

async function getSurahDetails(id: string): Promise<SurahDetails | null> {
  try {
    const res = await fetch(`${API_BASE_URL}/api/surah/${id}`);
    if (!res.ok) return null;
    return res.json();
  } catch (error) {
    console.error("Fetch error:", error);
    return null;
  }
}

export default async function SurahDetailPage({ params }: PageProps) {
  // In Next.js 15, params is a Promise that must be awaited
  const { id } = await params;
  const surah = await getSurahDetails(id);

  if (!surah || !surah.info) {
    return (
      <div className="text-center p-10 text-red-500">
        Surah not found or API error.
      </div>
    );
  }

  return (
    <div className="">
      <AyahSearch info={surah.info} ayahs={surah.ayahs || []} />
    </div>
  );
}
