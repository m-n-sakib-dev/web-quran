
import { API_BASE_URL } from "@/utils/api";
import AyahSearch from "@/components/AyahSearch";
import SurahDetails from "@/components/SurahDetails";

interface Ayah {
    surah_id: number;
    number_in_surah: number;
    text: string;
    data: string;
    audio_link: string;
}



interface SearchDetails {
    ayahs: Ayah[];
}

interface PageProps {
    searchParams: Promise<{ [key: string]: string }>;
}






async function getSearchAyah(text: string): Promise<SearchDetails | null> {
    try {
        const res = await fetch(`${API_BASE_URL}/api/ayah/${encodeURIComponent(text)}`, { cache: "no-store" });
        if (!res.ok) return null;
        return res.json();
    } catch (error) {
        return null;
    }
}

export default async function SearchPage({ searchParams }: PageProps) {
    const search_text = (await searchParams).q;
    let searchAyah = null;
    if (search_text) {
        searchAyah = await getSearchAyah(search_text);
        if (!searchAyah) {
            return (
                <div className="text-center p-10 text-2xl font-medium ">
                    Ayah <span className="text-red-500"> not found </span>for this search  ( <span className="text-primary1">{search_text} </span>)
                </div>
            );
        }
    }





    return (
        <div className="">
            {search_text ? <div className="">

                <div className="text-2xl font-medium text-center my-4">Search Results for <span className="text-primary1">{search_text}</span></div>
                <AyahSearch ayahs={searchAyah || []} />
            </div> : <div></div>}
        </div>
    );
}
