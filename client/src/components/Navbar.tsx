"use client";
import { useState } from "react";
import Link from 'next/link';
import SettingsSidebar from "@/components/SettingsSidebar";
import SurahListWrapper from "./SurahListWrapper";
import { useEffect } from "react";
import { Icon } from "@iconify/react";
import { useSettingsStore } from "@/store/useSettingsStore";


interface NavbarProps {
    surahLishtSidebar?: React.ReactNode;
}


export default function Navbar({ surahLishtSidebar }: NavbarProps) {
    const [isRightSidebarOpen, setRightSidebarOpen] = useState<boolean>(false);
    const [isLeftSidebarOpen, setLeftSidebarOpen] = useState<boolean>(false);
    const [isLargeScreen, setIsLargeScreen] = useState<boolean>(false);
    const [isHomePage, setIsHomePage] = useState<boolean>(false);
    const { theme, toggleTheme } = useSettingsStore();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setIsLargeScreen(window.innerWidth >= 1024);
        setMounted(true);
    }, []);

    return (
        <>
            <div className="z-50 bg-[var(--background)] h-16 flex items-center justify-between border-b border-gray-200 dark:border-gray-800 px-4 transition-colors">
                <div className="flex gap-3">
                    <div className="lg:hidden">
                        {!isHomePage && <button
                            onClick={() => setLeftSidebarOpen(true)}
                            className="bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-primary1 px-3 py-2 rounded-full transition-all cursor-pointer text-xl"
                            title="Menu"
                        >
                            ☰
                        </button>}
                    </div>
                    <Link href="/" className="font-bold text-lg md:text-xl flex-shrink-0 my-auto">
                        Web Quran
                    </Link>
                </div>
                {isHomePage && (
                    <div className="flex gap-6 absolute left-1/2 -translate-x-1/2 font-medium">
                        <Link href="/" className="hover:text-green-600 transition-colors">Home</Link>
                        <Link href="/1" className="hover:text-green-600 transition-colors">Surah</Link>
                    </div>
                )}

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
            {!isLargeScreen && (isLeftSidebarOpen || isRightSidebarOpen) && (<div
                className={`fixed inset-0 z-60 bg-black/50 backdrop-blur-sm ${isLeftSidebarOpen || isRightSidebarOpen ? "block" : "hidden"}`}
                onClick={() => {
                    setLeftSidebarOpen(false);
                    setRightSidebarOpen(false);
                }}
            />)}

            {!isLargeScreen && (<div
                className={`fixed inset-y-0 left-0 w-full md:w-92 shadow-2xl transform ${isLeftSidebarOpen ? "translate-x-0" : "-translate-x-full"
                    } transition-transform duration-300 ease-in-out p-6 z-70 bg-[var(--background)] dark:bg-[#121212] md:rounded-r-2xl`}
            >
                <SurahListWrapper
                    onClose={() => setLeftSidebarOpen(false)}
                >
                    {surahLishtSidebar}
                </SurahListWrapper>
            </div>)}

            {!isLargeScreen && (<div
                className={`fixed inset-y-0 right-0 w-full md:w-92 shadow-2xl transform ${isRightSidebarOpen ? "translate-x-0" : "translate-x-full"
                    } transition-transform duration-300 ease-in-out p-6 z-70 bg-[var(--background)] dark:bg-[#121212] md:rounded-l-2xl`}
            >
                <SettingsSidebar
                    onClose={() => setRightSidebarOpen(false)}
                />
            </div>)}
        </>
    );
}
