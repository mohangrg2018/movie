"use client";

import { useEffect, useState } from "react";

import { BsFillMoonFill } from "react-icons/bs";
import { BsFillSunFill } from "react-icons/bs";
import { useTheme } from "next-themes";

const DarkMode = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const { systemTheme, theme, setTheme } = useTheme();

  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <div className="cursor-pointer text-xl">
      {mounted &&
        (currentTheme === "dark" ? (
          <BsFillSunFill onClick={() => setTheme("light")} />
        ) : (
          <BsFillMoonFill onClick={() => setTheme("dark")} />
        ))}
    </div>
  );
};

export default DarkMode;
