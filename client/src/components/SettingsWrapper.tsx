"use client";
import { useSettingsStore } from "@/store/useSettingsStore";
import { useEffect, useState, ReactNode } from "react";

// 1. Define the props interface
interface SettingsWrapperProps {
  children: ReactNode;
  type?: "arabic" | "translation"; // Union type for strictness
}

export default function SettingsWrapper({ 
  children, 
  type = "arabic" 
}: SettingsWrapperProps) {
  const { arabicFont, arabicFontSize, translationFontSize } = useSettingsStore();
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // During hydration, just return the content to avoid mismatch errors
  if (!mounted) return <>{children}</>;

  const style =
    type === "arabic"
      ? { fontSize: `${arabicFontSize}px` }
      : { fontSize: `${translationFontSize}px` };

  const className = type === "arabic" ? arabicFont : "";

  return (
    <span className={className} style={style}>
      {children}
    </span>
  );
}
