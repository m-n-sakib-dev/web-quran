"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
// 1. Define the Surah data structure
interface Surah {
  id: number | string;
  number: number;
  name_ar: string;
  name_en: string;
  name_meaning?: string;
}

interface SurahRowProps {
  surah: Surah;
}

export default function SurahRow({ surah }: SurahRowProps) {
  const router = useRouter();
  const [id, setId] = useState<string | undefined>("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const currentId = window.location.pathname.split("/").pop();
      setId(currentId);
    }
  }, []);
  const handleRowClick = (): void => {
    router.push(`/${surah.id}`);
  };

  return (
    <div
      onClick={handleRowClick}
      className={`hover:bg-primary1/10 cursor-pointer transition-colors flex justify-between group my-1 py-2 px-4 rounded-md  border border-[var(--foreground)]/10 ${id == surah.id ? "bg-primary1/20" : ""}`}
    >
      <div className="flex gap-3">
        <div className="relative flex size-[32px] items-center justify-center group my-auto">
          <div className={`absolute inset-0 rotate-45 rounded-md  transition-colors ${id == surah.id ? "bg-primary1" : "bg-gray-200 dark:bg-[var(--foreground)]/20 group-hover:bg-primary1"}`}></div>
          <span className={`relative text-xs font-medium  group-hover:text-white ${id == surah.id ? "text-white" : ""}`}>
            {surah.number}
          </span>
        </div>
        <div className="">
          <div className="font-semibold text-md">{surah.name_en}</div>
          <div className="text-gray-500 text-sm">{surah.name_meaning}</div>
        </div>
      </div>
      <div className="my-auto text-sm font-noto">{surah.name_ar}</div>
    </div >
  );
}
