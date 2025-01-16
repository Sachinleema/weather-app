import { useTheme } from "@/context/theme-provider";
import { Moon, Sun } from "lucide-react";
// import React from "react";
import { Link } from "react-router-dom";
import CitySearch from "./city-search";

const Header = () => {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <header className="sticky flex top-0 z-50 border-b p-4 backdrop-blur bg-background/95 supports-[backdrop-filter]:bg-background/60 ">
      <div className="container flex mx-auto h-16 items-center justify-between lg:px-8 px-2">
        <Link to={"/"} className="flex justify-center items-center">
          <h1 className="font-bold text-xl m-2">Weather Forecast</h1>
        </Link>
        <div className="flex gap-4">
          <CitySearch />
          <div
            onClick={() => {
              setTheme(isDark ? "light" : "dark");
            }}
            className={` flex items-center cursor-pointer transition-transform duration-500 
              ${isDark ? "rotate-180" : "rotate-0"}`}
          >
            {isDark ? (
              <Sun className="h-6 w-6 text-yellow-300 rotate-0 transition-all" />
            ) : (
              <Moon className="h-6 w-6 rotate-0 transition-all" />
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
