"use client";
import { useState } from "react";
import Link from 'next/link';
import SettingsSidebar from "@/components/SettingsSidebar";
import SurahListWrapper from "./SurahListWrapper";
import { useEffect } from "react";


interface NavbarProps {
    surahLishtSidebar?: React.ReactNode;
}


export default function Navbar({ surahLishtSidebar }: NavbarProps) {
    const [isRightSidebarOpen, setRightSidebarOpen] = useState<boolean>(false);
    const [isLeftSidebarOpen, setLeftSidebarOpen] = useState<boolean>(false);
    const [isLargeScreen, setIsLargeScreen] = useState<boolean>(false);
    const [isHomePage, setIsHomePage] = useState<boolean>(false);


    useEffect(() => {
        setIsLargeScreen(window.innerWidth >= 1024);
        if (window.location.pathname == "/") {
            setIsHomePage(true);
        }
        else {
            setIsHomePage(false);
        }

    }, []);

    return (
        <>
            <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md">
                <div className=" mx-auto px-8 h-16 flex items-center justify-between">
                    <div className="flex gap-3">
                        <div className="lg:hidden">
                            {!isHomePage && <button
                                onClick={() => setLeftSidebarOpen(true)}
                                className="bg-gray-100 hover:bg-gray-200 p-2 rounded-lg transition-all cursor-pointer text-xl"
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
            {!isLargeScreen && (isLeftSidebarOpen || isRightSidebarOpen) && (<div
                className={`fixed inset-0 z-60 bg-black/50 backdrop-blur-sm ${isLeftSidebarOpen || isRightSidebarOpen ? "block" : "hidden"}`}
                onClick={() => {
                    setLeftSidebarOpen(false);
                    setRightSidebarOpen(false);
                }}
            />)}

            {!isLargeScreen && (<div
                className={`fixed inset-y-0 left-0 w-72 shadow-2xl transform ${isLeftSidebarOpen ? "translate-x-0" : "-translate-x-full"
                    } transition-transform duration-300 ease-in-out p-6 z-70 bg-white`}
            >
                <SurahListWrapper
                    onClose={() => setLeftSidebarOpen(false)}
                >
                    {surahLishtSidebar}
                </SurahListWrapper>
            </div>)}

            {!isLargeScreen && (<div
                className={`fixed inset-y-0 right-0 w-72 shadow-2xl transform ${isRightSidebarOpen ? "translate-x-0" : "translate-x-full"
                    } transition-transform duration-300 ease-in-out p-6 z-70 bg-white`}
            >
                <SettingsSidebar
                    onClose={() => setRightSidebarOpen(false)}
                />
            </div>)}
        </>
    );
}
