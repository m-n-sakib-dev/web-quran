"use client";
import { useState } from "react";
import Link from 'next/link';
import SettingsSidebar from "@/components/SettingsSidebar";
import { useEffect } from "react";

export default function Navbar() {
    const [isRightSidebarOpen, setRightSidebarOpen] = useState<boolean>(false);
    const [isLeftSidebarOpen, setLeftSidebarOpen] = useState<boolean>(false);
    const [isLargeScreen, setIsLargeScreen] = useState<boolean>(false);
    useEffect(() => {
        setIsLargeScreen(window.innerWidth >= 1024);
    }, []);

    return (
        <>
            <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md">
                <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
                    <div className="lg:hidden">
                        <button
                            onClick={() => setLeftSidebarOpen(true)}
                            className="bg-gray-100 hover:bg-gray-200 p-2 rounded-lg transition-all cursor-pointer text-xl"
                            title="Menu"
                        >
                            ☰
                        </button>
                    </div>

                    <Link href="/" className="font-bold text-lg md:text-xl flex-shrink-0">
                        Web Quran
                    </Link>

                    <div className="flex gap-6 absolute left-1/2 -translate-x-1/2 font-medium">
                        <Link href="/" className="hover:text-green-600 transition-colors">Home</Link>
                        <Link href="/surah" className="hover:text-green-600 transition-colors">Surah</Link>
                    </div>

                    <div className="lg:hidden">
                        <button
                            onClick={() => setRightSidebarOpen(true)}
                            className="bg-gray-100 hover:bg-gray-200 p-2 rounded-lg transition-all cursor-pointer text-xl"
                            title="Settings"
                        >
                            ⚙️
                        </button>
                    </div>

                </div>
            </nav>

            {!isLargeScreen && (<div
                className={`fixed inset-y-0 left-0 w-72 shadow-2xl transform ${isLeftSidebarOpen ? "translate-x-0" : "-translate-x-full"
                    } transition-transform duration-300 ease-in-out p-6 z-50 bg-gray-300`}
            >

                <SettingsSidebar
                    onClose={() => setLeftSidebarOpen(false)}
                />
            </div>)}

            {!isLargeScreen && (<div
                className={`fixed inset-y-0 right-0 w-72 shadow-2xl transform ${isRightSidebarOpen ? "translate-x-0" : "translate-x-full"
                    } transition-transform duration-300 ease-in-out p-6 z-50 bg-gray-300`}
            >
                <SettingsSidebar
                    onClose={() => setRightSidebarOpen(false)}
                />
            </div>)}
        </>
    );
}
