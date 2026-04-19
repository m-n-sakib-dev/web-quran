import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[var(--background)] text-[var(--foreground)] transition-colors duration-300">
      {/* Decorative Background Element */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none opacity-20">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-green-500 rounded-full blur-[120px]"></div>
        <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-blue-500 rounded-full blur-[120px]"></div>
      </div>

      <main className="text-center px-6 max-w-3xl">
        {/* Arabic Calligraphy Style Text (Optional) */}
        <h2 className="font-amiri text-4xl md:text-6xl text-green-600 dark:text-green-400 mb-6" dir="rtl">
          بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
        </h2>

        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
          Experience the <span className="text-green-600">Holy Quran</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-10 leading-relaxed">
          Explore, read, and understand the divine message with our modern,
          highly customizable interface. Built for clarity and peace.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/surah"
            className="px-8 py-4 bg-green-600 hover:bg-green-700 text-white rounded-full font-bold text-lg shadow-lg shadow-green-500/30 transition-all hover:scale-105 active:scale-95"
          >
            Read Surah List
          </Link>

        </div>

        {/* Feature Highlights */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-gray-200 dark:border-gray-800 pt-10">
          <div>
            <h3 className="font-bold text-xl mb-2">Custom Fonts</h3>
            <p className="text-sm text-gray-500">Choose between Uthmani and IndoPak scripts.</p>
          </div>
          <div>
            <h3 className="font-bold text-xl mb-2">Custom Font Size</h3>
            <p className="text-sm text-gray-500">Choose your desired font size to read quran easily</p>
          </div>
          <div>
            <h3 className="font-bold text-xl mb-2">Fully Responsive</h3>
            <p className="text-sm text-gray-500">Read on your phone, tablet, or desktop.</p>
          </div>
        </div>
      </main>

      <footer className="md:absolute md:-bottom-4 text-sm text-gray-500 mt-6 ">
        © {new Date().getFullYear()} Web Quran Project by <Link
          href="https://m-n-sakib-dev.github.io/"
          className="text-blue-700 "
        >
          m_n_sakib
        </Link>
      </footer>
    </div>
  );
}
