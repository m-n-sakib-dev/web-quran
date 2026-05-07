import React from "react";
import { API_BASE_URL } from "@/utils/api";
import SurahRow from "@/components/SurahRow";

// 1. Define the Surah interface
interface Surah {
  id: number | string;
  number: number;
  name_ar: string;
  name_en: string;
}

// 2. Type the fetch function
async function getSurahs(): Promise<Surah[]> {
  const res = await fetch(`${API_BASE_URL}/api/surahs`);
  
  if (!res.ok) {
    throw new Error("Failed to fetch surahs");
  }
  
  return res.json();
}

export default async function SurahPage() {
  const surahs = await getSurahs();

  return (
    <div className="w-full max-w-screen">
      <table className="w-full text-center">
        <thead>
          <tr className="bg-gray-300 text-black">
            <th className="py-2">Surah Number</th>
            <th>Surah Name (Arabic)</th>
            <th>Surah Name (English)</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(surahs) && 
            surahs.map((surah) => (
              <SurahRow key={surah.id} surah={surah} />
            ))
          }
        </tbody>
      </table>
    </div>
  );
}
