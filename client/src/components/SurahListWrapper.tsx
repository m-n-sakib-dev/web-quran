"use client";

import { Icon } from "@iconify/react";

interface SurahListWrapperProps {
    children: React.ReactNode;
    onClose?: () => void;
}

export default function SurahListWrapper({ children, onClose }: SurahListWrapperProps) {
    return (

        <div className="w-full h-screen flex flex-col">
            <div className="flex justify-between mb-2 mt-6">
                <div className="flex gap-2">
                    <Icon icon="material-symbols-light:menu-book-rounded" className="text-3xl text-primary1 my-auto" /> <h1 className="text-2xl font-bold"> Web Quran</h1>
                </div>
                <button onClick={onClose} className="cursor-pointer">✕</button>
            </div>
            <div className="overflow-y-auto flex-1">
                {children}
            </div>
        </div>
    )
}