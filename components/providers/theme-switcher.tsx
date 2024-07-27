"use client";

import { useState, useEffect } from "react";

import { BiMoon, BiSun } from "react-icons/bi";

export const ThemeSwitcher = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "light") {
      setDarkMode(false);
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);
  return (
    <div
      className=" relative w-16 h-8  flex items-center dark:bg-gray-900 bg-sky-700 cursor-pointer rounded-full p-1 mx-4"
      onClick={() => setDarkMode(!darkMode)}
    >
      <BiMoon className="text-white" size={18} />

      <div
        className="absolute bg-white w-6 h-6 rounded-full shadow-md transform transition-transform duration-300 "
        style={darkMode ? { left: "2px" } : { right: "2px" }}
      ></div>
      <BiSun className="ml-auto text-sky-700" size={18} /> 
    </div>
  );
};
