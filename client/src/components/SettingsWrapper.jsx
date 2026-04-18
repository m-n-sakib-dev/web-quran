"use client";
import { useSettingsStore } from "@/store/useSettingsStore";
import { useEffect, useState } from "react";

export default function SettingsWrapper({ children, type = "arabic" }) {
  const { arabicFont, arabicFontSize, translationFontSize } =
    useSettingsStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

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
