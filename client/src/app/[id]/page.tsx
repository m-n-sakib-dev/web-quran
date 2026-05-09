
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

interface SurahInfo {
  name_ar: string;
  name_en: string;
  type: string;
}

interface SurahDetails {
  info: SurahInfo;
  ayahs: Ayah[];
}

interface SearchDetails {
  ayahs: Ayah[];
}

// 2. Define the types for Next.js Page Props
interface PageProps {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ [key: string]: string }>;
}

export async function generateStaticParams() {
  const surahs = Array.from({ length: 114 }, (_, i) => ({
    id: (i + 1).toString(),
  }));
  return [...surahs, { id: 'search' }];
}


async function getSurahDetails(id: string): Promise<SurahDetails | null> {
  try {
    const res = await fetch(`${API_BASE_URL}/api/surah/${id}`);
    if (!res.ok) return null;
    return res.json();
  } catch (error) {
    return null;
  }
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

export default async function SurahDetailPage({ params, searchParams }: PageProps) {
  const { id } = await params;
  const search_text = (await searchParams).q;
  let surah = null;
  let searchAyah = null;
  if (id === 'search') {
    if (!search_text) {
      return <div className="text-center p-10 text-2xl font-medium ">Please enter a search term.</div>;
    }
    searchAyah = await getSearchAyah(search_text);
    console.log(searchAyah);
    if (!searchAyah) {
      return (
        <div className="text-center p-10 text-2xl font-medium ">
          Ayah <span className="text-red-500"> not found </span>for this search  ( <span className="text-primary1">{search_text} </span>)
        </div>
      );
    }
  }
  else {
    surah = await getSurahDetails(id);
    if (!surah || !surah.info) {
      return (
        <div className="text-center p-10 text-red-500 font-noto-serif">
          Surah not found or API error. {`${API_BASE_URL}/api/surah/${id}`}, id = {id} and search_text = {search_text}
        </div>
      );
    }

  }




  return (
    <div className="">
      {id === 'search' ? <div className="">

        <div className="text-2xl font-medium text-center my-4">Search Results for <span className="text-primary1">{search_text}</span></div>
        <AyahSearch ayahs={searchAyah || []} />
      </div> : <SurahDetails info={surah.info} ayahs={surah.ayahs || []} id={Number(id)} />}
    </div>
  );
}

