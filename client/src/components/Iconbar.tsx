"use client";
import { useState } from "react";
import Link from 'next/link';
import { useEffect } from "react";
import { Icon } from '@iconify/react';





export default function Iconbar() {
    const [isLargeScreen, setIsLargeScreen] = useState<boolean>(false);
    const [isHomePage, setIsHomePage] = useState<boolean>(false);


    useEffect(() => {
        setIsLargeScreen(window.innerWidth >= 1024);


        if (window.location.pathname === "/") {
            setIsHomePage(true);
        } else {
            setIsHomePage(false);
        }

    }, []);

    return (
        <>

            <nav className="bg-[var(--background)]/10 dark:bg-[var(--background)]/90 flex flex-row lg:flex-col lg:justify-between justify-center h-full z-50 h-full py-4">
                <div className="lg:mx-auto hidden lg:block">
                    <Link href="/" className="">
                        <Icon icon="material-symbols-light:menu-book-rounded" className="text-3xl text-primary1 my-auto" />
                    </Link>
                </div>

                <div className="flex flex-row lg:flex-col items-center justify-center gap-6 font-medium text-gray-500">
                    <Link href="/" className="hover:text-green-600  transition-colors"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M9.23051 2.58494L2.87801 7.67243C2.16301 8.24076 1.70467 9.44163 1.86051 10.34L3.07968 17.6366C3.29968 18.9383 4.54634 19.9924 5.86634 19.9924H16.133C17.4438 19.9924 18.6997 18.9291 18.9197 17.6366L20.1388 10.34C20.2855 9.44163 19.8272 8.24076 19.1213 7.67243L12.7688 2.59411C11.788 1.80578 10.2022 1.80577 9.23051 2.58494Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M11.0007 14.2083C12.2663 14.2083 13.2923 13.1823 13.2923 11.9167C13.2923 10.651 12.2663 9.625 11.0007 9.625C9.735 9.625 8.70898 10.651 8.70898 11.9167C8.70898 13.1823 9.735 14.2083 11.0007 14.2083Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg></Link>
                    <Link href="/1" className="hover:text-green-600 transition-colors"><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none"><path opacity="0.4" d="M20.2264 2.16675H18.168C15.8064 2.16675 14.5605 3.41258 14.5605 5.77425V7.83258C14.5605 10.1942 15.8064 11.4401 18.168 11.4401H20.2264C22.588 11.4401 23.8339 10.1942 23.8339 7.83258V5.77425C23.8339 3.41258 22.588 2.16675 20.2264 2.16675Z" fill="currentColor"></path><path opacity="0.4" d="M7.84268 14.5491H5.78435C3.41185 14.5491 2.16602 15.7949 2.16602 18.1566V20.2149C2.16602 22.5874 3.41185 23.8332 5.77352 23.8332H7.83185C10.1935 23.8332 11.4394 22.5874 11.4394 20.2257V18.1674C11.4502 15.7949 10.2043 14.5491 7.84268 14.5491Z" fill="currentColor"></path><path d="M6.81352 11.4617C9.38026 11.4617 11.461 9.38099 11.461 6.81425C11.461 4.2475 9.38026 2.16675 6.81352 2.16675C4.24677 2.16675 2.16602 4.2475 2.16602 6.81425C2.16602 9.38099 4.24677 11.4617 6.81352 11.4617Z" fill="currentColor"></path><path d="M19.1866 23.8333C21.7533 23.8333 23.8341 21.7526 23.8341 19.1858C23.8341 16.6191 21.7533 14.5383 19.1866 14.5383C16.6198 14.5383 14.5391 16.6191 14.5391 19.1858C14.5391 21.7526 16.6198 23.8333 19.1866 23.8333Z" fill="currentColor"></path></svg></Link>
                </div>

                <div className=""></div>

            </nav>

        </>
    );
}
