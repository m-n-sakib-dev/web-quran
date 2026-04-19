"use client";
import { useState } from "react";
import Link from 'next/link';
import SettingsSidebar from "@/components/SettingsSidebar";

export default function Navbar() {
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    return (
        <>
            <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b">
                <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">

                    {/* Logo (Left) */}
                    <Link href="/" className="font-bold text-lg md:text-xl flex-shrink-0">
                        Web Quran
                    </Link>

                    {/* Menu Items (Center) */}
                    <div className="flex gap-6 absolute left-1/2 -translate-x-1/2 font-medium">
                        <Link href="/" className="hover:text-green-600 transition-colors">Home</Link>
                        <Link href="/surah" className="hover:text-green-600 transition-colors">Surah</Link>
                    </div>

                    {/* Settings Button (Right) */}
                    <div className="flex items-center">
                        <button
                            onClick={() => setSidebarOpen(true)}
                            className="bg-gray-100 hover:bg-gray-200 p-2 rounded-lg transition-all cursor-pointer text-xl"
                            title="Settings"
                        >
                            ⚙️
                        </button>
                    </div>
                </div>
            </nav>

            {/* Settings Sidebar */}
            <SettingsSidebar
                isOpen={isSidebarOpen}
                onClose={() => setSidebarOpen(false)}
            />
        </>
    );
}
