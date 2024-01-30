// providers / themeProvider.tsx
"use client";

import { ReactNode, useEffect, useState } from "react";
import { ThemeProvider as InitialProvider } from "next-themes";

type ThemeProviderProps = {
  children: ReactNode;
};

function ThemeProvider({ children }: ThemeProviderProps) {
  // Avoid Hydration Mismatch
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return <>{children}</>;
  }
  return (
    <InitialProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </InitialProvider>
  );
}

export default ThemeProvider;
