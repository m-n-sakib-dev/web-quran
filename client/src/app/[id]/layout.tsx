"use client";
import SettingsSidebar from "@/components/SettingsSidebar";

interface SurahLayoutProps {
    children: React.ReactNode;
}

export default function SurahLayout({ children }: SurahLayoutProps) {
    return (
        <div className="w-full flex gap-6 items-start">

            <div className="leftbar sticky top-20 h-full overflow-y-auto hidden md:block">
            </div>

            <div className="flex-1">
                {children}
            </div>

            <div className="rightbar sticky top-20 h-full overflow-y-auto hidden lg:block">
                <SettingsSidebar onClose={() => { }} />
            </div>
        </div>

    );
}