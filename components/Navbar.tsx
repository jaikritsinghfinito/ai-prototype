"use client";

type NavbarProps = {
  theme: "light" | "dark";
  onToggleTheme: () => void;
};

export default function Navbar({ theme, onToggleTheme }: NavbarProps) {
  const isDark = theme === "dark";

  return (
    <nav
      className={`w-full h-16 rounded-2xl shadow-sm border flex items-center justify-between px-6
      ${isDark ? "bg-[#0b1020]/80 border-gray-700" : "bg-white/60 backdrop-blur-md border-gray-200"}`}
    >
      <h1 className="text-xl font-semibold">multipleAI</h1>

      <div className="flex items-center gap-4">
        
        <button
          type="button"
          onClick={onToggleTheme}
          className="p-2 rounded-full hover:bg-gray-200/30 transition"
          aria-label="Toggle theme"
        >
          {isDark ? "☀️" : "🌙"}
        </button>

        <div className="w-8 h-8 bg-gray-300 rounded-full overflow-hidden" />
      </div>
    </nav>
  );
}
