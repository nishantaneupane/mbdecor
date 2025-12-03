"use client";

import { useState, useEffect } from "react";

const themes = [
  { name: "Golden", value: "#d4af37", label: "🟡 Golden" },
  { name: "Red", value: "#dc2626", label: "🔴 Red" },
  { name: "Blue", value: "#2563eb", label: "🔵 Blue" },
  { name: "Green", value: "#16a34a", label: "🟢 Green" },
  { name: "Purple", value: "#9333ea", label: "🟣 Purple" },
  { name: "Pink", value: "#ec4899", label: "🩷 Pink" },
];

export default function ThemeSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentTheme, setCurrentTheme] = useState(themes[0]);

  useEffect(() => {
    // Load saved theme from localStorage
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      const theme = themes.find((t) => t.value === savedTheme) || themes[0];
      setCurrentTheme(theme);
      applyTheme(savedTheme);
    }
  }, []);

  const applyTheme = (color: string) => {
    document.documentElement.style.setProperty("--primary", color);
  };

  const handleThemeChange = (theme: (typeof themes)[0]) => {
    setCurrentTheme(theme);
    applyTheme(theme.value);
    localStorage.setItem("theme", theme.value);
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="relative">
        {/* Theme Options */}
        {isOpen && (
          <div className="absolute bottom-full right-0 mb-2 bg-white rounded-lg shadow-xl border p-2 min-w-[140px]">
            <div className="text-xs font-semibold text-gray-500 px-2 py-1 mb-1">
              Choose Theme
            </div>
            {themes.map((theme) => (
              <button
                key={theme.value}
                onClick={() => handleThemeChange(theme)}
                className={`w-full text-left px-3 py-2 rounded-md hover:bg-gray-100 transition-colors flex items-center gap-2 text-sm ${
                  currentTheme.value === theme.value
                    ? "bg-gray-100 font-semibold"
                    : ""
                }`}
              >
                {theme.label}
              </button>
            ))}
          </div>
        )}

        {/* Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 rounded-full shadow-lg hover:shadow-xl transition-all flex items-center justify-center text-white font-bold"
          style={{ backgroundColor: currentTheme.value }}
          aria-label="Change theme color"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
