"use client";
import { useState, ChangeEvent, useRef } from "react";
import SettingsWrapper from "@/components/SettingsWrapper";
import { Icon } from '@iconify/react';


// 1. Define the interfaces for your data
interface Ayah {
    number_in_surah: number;
    text: string;  // Arabic text
    data: string;  // Translation text
    audio_link: string;
}

interface SurahInfo {
    name_ar: string;
    name_en: string;
    type: string;
}

interface AyahSearchProps {
    info: SurahInfo;
    ayahs: Ayah[];
    id: number;
}

export default function AyahSearch({ info, ayahs, id }: AyahSearchProps) {
    const [searchTerm, setSearchTerm] = useState<string>("");
    const total_ayahs = ayahs.length;

    const [currentPlayingUrl, setCurrentPlayingUrl] = useState<string | null>(null);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    const filteredAyahs = ayahs.filter((ayah) =>
        ayah.data.toLowerCase().includes(searchTerm.toLowerCase())
    );
    const playAudio = (url: string) => {
        const audio = new Audio(url);
        audio.play();
    };
    const handlePlayPause = (number_in_surah: number) => {
        const url = ayahs[number_in_surah - 1].audio_link;
        if (currentPlayingUrl !== url) {
            if (audioRef.current) {
                audioRef.current.pause();
            }

            audioRef.current = new Audio(url);
            audioRef.current.play();
            setCurrentPlayingUrl(url);
            if (number_in_surah + 1 < total_ayahs) audioRef.current.onended = () => handlePlayPause(number_in_surah + 1);
            else audioRef.current.onended = () => setCurrentPlayingUrl(null);
        }
        else {
            audioRef.current.pause();
            setCurrentPlayingUrl(null);
        }
    };
    return (
        <>
            <div className="mb-4 hidden">
                <input
                    type="text"
                    placeholder="Search in translation..."
                    className="w-full p-3 px-6 border rounded-4xl outline-none focus:ring-2 focus:ring-blue-400"
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
                />
            </div>
            <div className="overflow-hidden">
                <div className="flex md:justify-between px-8 justify-center">
                    <div className="w-1/3 hidden md:block">

                        {info.type == "Madinah" ? <img className="h-20" src="https://quranmazid.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmadinah.d27df76f.png&w=750&q=75" alt="" />
                            : <img className="h-20" src="https://quranmazid.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmakkah.a06c3e3e.png&w=828&q=75" alt="" />}
                    </div>
                    <div className="text-center">
                        <div className="text-center text-[34px] ">{info.name_en}</div>
                        <div className="text-center text-md text-gray-500">Ayah-{total_ayahs}, {info.type}</div>
                    </div>
                    <div className="w-1/4 h-16  bg-no-repeat bg-center bg-contain px-8 my-auto hidden md:block bg-[url('https://quranmazid.com/_next/static/media/bismillah.2a2f3d14.svg')]"></div>
                </div>

                <div className="mt-6">
                    {filteredAyahs.length > 0 ? (
                        filteredAyahs.map((ayah) => (
                            <div className={`py-4  border-b border-[var(--foreground)]/10 flex ${ayah.audio_link == currentPlayingUrl ? "bg-[var(--foreground)]/10 rounded-xl" : ""}  px-4`} key={ayah.number_in_surah}>
                                <div className="">
                                    <p className="text-primary1">{id}:{ayah.number_in_surah}</p>
                                    <button
                                        onClick={() => handlePlayPause(ayah.number_in_surah)}
                                        className="cursor-pointer transition"
                                    >
                                        {currentPlayingUrl === ayah.audio_link ? <Icon
                                            icon="material-symbols-light:pause-outline-rounded"
                                            className="text-2xl text-green-600"
                                        /> : <Icon
                                            icon="material-symbols-light:play-arrow-outline-rounded"
                                            className="text-4xl -ms-2 text-green-600"
                                        />}
                                    </button>
                                </div>
                                <div className="flex-grow px-4">
                                    <p className="text-right">
                                        <SettingsWrapper type="arabic">{ayah.text}</SettingsWrapper>
                                    </p>
                                    <p className="uppercase text-sm text-gray-500 font-semibold mt-6">Saheeh International</p>
                                    <p className="mt-1">
                                        <SettingsWrapper type="translation">{ayah.data}</SettingsWrapper>
                                    </p>
                                </div>
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
