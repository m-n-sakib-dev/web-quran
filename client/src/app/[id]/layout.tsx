
import SettingsSidebar from "@/components/SettingsSidebar";
import SurahList from "@/components/SurahList";


interface SurahLayoutProps {
    children: React.ReactNode;
}

export default function SurahLayout({ children }: SurahLayoutProps) {
    return (
        <div className="w-full flex items-start">

            <div className="leftbar sticky top-20 w-1/5 h-[calc(100vh-80px)] overflow-y-auto hidden lg:block">
                <SurahList />
            </div>

            <div className="flex-1 ">
                {children}
            </div>

            <div className="rightbar sticky top-20 w-1/5 h-full overflow-y-auto hidden lg:block">
                <SettingsSidebar />
            </div>
        </div>

    );
}