"use client";
export default function SurahListWrapper({ children }: { children: React.ReactNode }) {
    return (

        <div className="flex">
            {children}
        </div>
    )
}