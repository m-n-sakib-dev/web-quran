"use client";
import { useState } from "react";
import Link from 'next/link';
import { useEffect } from "react";
import { Icon } from "@iconify/react";




export default function HomeNavbar() {
    const [isRightSidebarOpen, setRightSidebarOpen] = useState<boolean>(false);

    return (
        <>
            <nav className="z-50 bg-white h-16 flex items-center justify-between border-b border-gray-200 px-4 lg:px-20">
                <div className="">
                    <Link href="/" className="flex gap-3 font-bold text-lg md:text-xl flex-shrink-0 my-auto">
                        <Icon icon="material-symbols-light:menu-book-rounded" className="text-3xl text-primary1 my-auto" />Web Quran
                    </Link>
                </div>

                <div className=" gap-6 absolute left-1/2 -translate-x-1/2 font-medium hidden lg:flex">
                    <Link href="/" className="hover:text-green-600 transition-colors">Home</Link>
                    <Link href="/1" className="hover:text-green-600 transition-colors">Surah</Link>
                </div>


                <div className="lg:hidden">
                    <button
                        onClick={() => setRightSidebarOpen(true)}
                        className="bg-gray-100 hover:bg-gray-200 p-2 rounded-full transition-all cursor-pointer text-xl"
                        title="Settings"
                    >
                        <Icon icon="material-symbols-light:settings" className="text-primary1" />
                    </button>
                </div>

            </nav>
        </>
    );
}
