import { API_BASE_URL } from "@/utils/api";
import SurahRow from "@/components/SurahRow";


interface Surah {
    id: number | string;
    number: number;
    name_ar: string;
    name_en: string;
    name_meaning?: string;
}


async function getSurahs(): Promise<Surah[]> {
    try {
        const res = await fetch(`${API_BASE_URL}/api/surahs`);

        if (!res.ok) {
            console.warn("Surah fetch status not ok");
            return [];
        }

        return await res.json();
    } catch (error) {
        console.error("Fetch failed (expected during SSR):", error);
        return [];
    }
}


export default async function SurahList() {
    const surahs = await getSurahs();

    return (
        <div className="w-full h-full pe-2">
            {Array.isArray(surahs) &&
                surahs.map((surah) => (
                    <SurahRow key={surah.id} surah={surah} />
                ))
            }
        </div>
    );
}