// components/SearchBar.tsx
'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

interface SearchBarProps {
    onClose: () => void;
}

export default function SearchBar({ onClose }: SearchBarProps) {
    const [text, setText] = useState('');
    const router = useRouter();

    const handleSearch = (e: React.FormEvent) => {

        e.preventDefault();
        if (!text) return;
        router.push(`/search?q=${encodeURIComponent(text)}`);
        onClose();
    };

    return (
        <div className="w-full bg-gray-100 dark:bg-gray-800 p-2 rounded-xl">
            <form onSubmit={handleSearch} className="flex flex-col gap-4 p-4">
                <input
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Search here..."
                    className="border p-2 rounded-xl focus:border-primary1 focus:outline-none px-6"
                />
                <button type="submit" className="bg-primary1 p-2 rounded-xl text-white mx-auto px-10">Search</button>
            </form>
        </div>
    );
}
