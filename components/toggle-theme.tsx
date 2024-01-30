//components>toggle-theme.tsx
"use client"
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react'
import { Sun, Moon } from 'lucide-react';

function ToggleTheme() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // to avoid Hydration Mismatch
  useEffect(() => {
    setMounted(true);
  }, []);
  // Return null if not mounted to avoid rendering on the server
  if (!mounted) return null;

  // function to toggle the theme
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    // Button to toggle theme
    <button onClick={toggleTheme}>
      {theme === "light" ? (
        <Moon className="h-6 w-6 " />
      ) : (
        <Sun className="h-6 w-6  " />
      )}
    </button>
  );
}

export default ToggleTheme;