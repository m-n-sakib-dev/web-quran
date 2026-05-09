
import { API_BASE_URL } from "@/utils/api";

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
}

export async function generateStaticParams() {
  const surahs = Array.from({ length: 114 }, (_, i) => ({
    id: (i + 1).toString(),
  }));
  return [...surahs];
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
export default async function SurahDetailPage({ params }: PageProps) {
  const { id } = await params;

  let surah = null;


  surah = await getSurahDetails(id);
  if (!surah || !surah.info) {
    return (
      <div className="text-center p-10 text-red-500 font-noto-serif">
        Surah not found or API error.
      </div>
    );
  }
  return (
    <div className="">

      <SurahDetails info={surah.info} ayahs={surah.ayahs || []} id={Number(id)} />

    </div>
  );
}

