"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { Globe } from "lucide-react";
import { useState, useRef, useEffect } from "react";

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLanguageChange = (lang: "en" | "zh") => {
    setLanguage(lang);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-lg border border-[#008C8C] hover:bg-[#008C8C] hover:text-white transition-colors text-[#008C8C]"
        aria-label="Toggle language"
      >
        <Globe className="w-3 h-3 sm:w-4 sm:h-4" />
      </button>

      {isOpen && (
        <div className="absolute right-0 bottom-full mb-2 w-32 bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-lg shadow-lg z-50">
          <div className="py-1">
            <button
              onClick={() => handleLanguageChange("en")}
              className={`w-full px-4 py-2 text-left text-sm transition-colors ${
                language === "en"
                  ? "bg-[#008C8C] text-white"
                  : "text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
              }`}
            >
              🇺🇸 English
            </button>
            <button
              onClick={() => handleLanguageChange("zh")}
              className={`w-full px-4 py-2 text-left text-sm transition-colors ${
                language === "zh"
                  ? "bg-[#008C8C] text-white"
                  : "text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
              }`}
            >
              🇨🇳 中文
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
