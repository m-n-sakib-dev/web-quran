"use client";
import { useState } from "react";
import SettingsSidebar from "@/components/SettingsSidebar";

export default function SurahLayout({ children }) {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="relative min-h-screen">
      <button
        onClick={() => setSidebarOpen(true)}
        className="fixed bottom-5 right-5 bg-green-600 text-white p-4 rounded-full shadow-lg z-40"
      >
        ⚙️
      </button>

      <SettingsSidebar
        isOpen={isSidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      <main className="p-4 md:p-8">{children}</main>
    </div>
  );
}
