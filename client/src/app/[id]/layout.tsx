
import SettingsSidebar from "@/components/SettingsSidebar";
import SurahList from "@/components/SurahList";
import Iconbar from "@/components/Iconbar";
import Navbar from "@/components/Navbar";


interface SurahLayoutProps {
    children: React.ReactNode;
}

export default function SurahLayout({ children }: SurahLayoutProps) {
    return (

        <div className="flex w-ful flex-col lg:flex-row">
            <div className="fixed lg:sticky bottom-0 lg:left-0 lg:top-0 w-full h-12 lg:h-screen lg:w-16 bg-gray-100 order-2 lg:order-1"><Iconbar /></div>
            <div className="min-h-full flex flex-col pt-16 order-1 lg:order-2 mb-14 lg:mb-0 w-full">
                <div className="fixed top-0 right-0 left-0 lg:left-16 ">
                    <Navbar surahLishtSidebar={<SurahList />} />
                </div>
                <div className="flex-grow p-4 md:px-8 lg:px-4 md:py-4">
                    <div className="w-full flex items-start">

                        <div className="leftbar sticky top-20 w-1/4 h-[calc(100vh-80px)] overflow-y-auto custom-scrollbar hidden lg:block">
                            <SurahList />
                        </div>

                        <div className="flex-1 ">
                            {children}
                        </div>

                        <div className="rightbar sticky top-20 w-1/4 h-full overflow-y-auto hidden lg:block">
                            <SettingsSidebar />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}