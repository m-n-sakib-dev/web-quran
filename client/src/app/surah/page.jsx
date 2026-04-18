import React from "react";
import { API_BASE_URL } from "@/utils/api";
import SurahRow from "@/components/SurahRow";

async function getSurahs() {
  const res = await fetch(`${API_BASE_URL}/api/surahs`);
  return res.json();
}

export default async function page() {
  const surahs = await getSurahs();
  return (
    <div className="overflow-x-auto ">
      <table className="table text-center">
        {/* head */}
        <thead>
          <tr className="bg-gray-300 text-black">
            <th>Surah Number</th>
            <th>Surah Name (Arabic)</th>
            <th>Surah Name (English)</th>
          </tr>
        </thead>
        <tbody>
          {surahs.map((surah) => (
            <SurahRow key={surah.id} surah={surah} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
