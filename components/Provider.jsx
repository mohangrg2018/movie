"use client";

import { ThemeProvider } from "next-themes";

const Provider = ({ children }) => {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <div className="dark:bg-gray-700 dark:text-gray-200 transition-colors duration-500 min-h-screen">
        {children}
      </div>
    </ThemeProvider>
  );
};

export default Provider;
