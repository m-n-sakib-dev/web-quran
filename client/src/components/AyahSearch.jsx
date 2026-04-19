"use client";
import { useState } from "react";
import SettingsWrapper from "@/components/SettingsWrapper";

export default function AyahSearch({ info, ayahs }) {
    const [searchTerm, setSearchTerm] = useState("");

    const filteredAyahs = ayahs.filter((ayah) =>
        ayah.data.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            <div className="mb-4">
                <input
                    type="text"
                    placeholder="Search in translation..."
                    className="w-full p-3 border rounded-xl outline-none focus:ring-2 focus:ring-blue-400"
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
            <div className="rounded-2xl overflow-hidden border">

                <div className="bg-gray-400">
                    <div className="text-center text-[34px] font-noto">{info.name_ar}</div>
                    <div className="text-center text-[24px]">{info.name_en}</div>
                </div>

                <div className="rounded-2xl overflow-hidden">
                    {filteredAyahs.length > 0 ? (
                        filteredAyahs.map((ayah) => (
                            <div className="p-4 border-t" key={ayah.number_in_surah}>
                                <p className="text-right">
                                    <SettingsWrapper type="arabic">{ayah.text}</SettingsWrapper>
                                </p>
                                <p className="mt-2">
                                    <SettingsWrapper type="translation">{ayah.data}</SettingsWrapper>
                                </p>
                            </div>
                        ))
                    ) : (
                        <p className="p-10 text-center text-gray-500">No Ayah found with this translation.</p>
                    )}
                </div>
            </div>
        </>
    );
}
