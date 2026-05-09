"use client";
import { useState } from "react";
import Link from 'next/link';
import { useEffect } from "react";
import { Icon } from "@iconify/react";
import { useSettingsStore } from "@/store/useSettingsStore";




export default function HomeNavbar() {
    const [isRightSidebarOpen, setRightSidebarOpen] = useState<boolean>(false);
    const { theme, toggleTheme } = useSettingsStore();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <>
            <div className="z-50 bg-[var(--background)]  h-16 flex items-center justify-between border-b border-gray-200 dark:border-gray-800 px-4 lg:px-20 transition-colors">
                <div className="">
                    <Link href="/" className="flex gap-3 font-bold text-lg md:text-xl flex-shrink-0 my-auto">
                        <Icon icon="material-symbols-light:menu-book-rounded" className="text-3xl text-primary1 my-auto" />Web Quran
                    </Link>
                </div>

                <div className=" gap-6 absolute left-1/2 -translate-x-1/2 font-medium hidden lg:flex">
                    <Link href="/" className="hover:text-green-600 transition-colors">Home</Link>
                    <Link href="/1" className="hover:text-green-600 transition-colors">Surah</Link>
                </div>


                <div className="flex gap-2 items-center">
                    {mounted && (
                        <button
                            onClick={toggleTheme}
                            className="bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 p-2 rounded-full transition-all cursor-pointer text-xl"
                            title="Toggle Dark Mode"
                        >
                            {theme === 'dark' ? (
                                <Icon icon="material-symbols-light:light-mode" className="text-yellow-500" />
                            ) : (
                                <Icon icon="material-symbols-light:dark-mode" className="text-gray-700" />
                            )}
                        </button>
                    )}
                    <div className="lg:hidden">
                        <button
                            onClick={() => setRightSidebarOpen(true)}
                            className="bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 p-2 rounded-full transition-all cursor-pointer text-xl"
                            title="Settings"
                        >
                            <Icon icon="material-symbols-light:settings" className="text-primary1" />
                        </button>
                    </div>
                </div>

            </div>
        </>
    );
}
