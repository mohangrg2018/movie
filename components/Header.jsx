import React from "react";
import HeaderItem from "./HeaderItem";
import Link from "next/link";
import { AiFillHome } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";
import DarkMode from "./DarkMode";

const Header = () => {
  return (
    <section className="flex items-center justify-between max-w-sm xl:max-w-6xl sm:max-w-xl mx-auto py-4">
      <div className="flex items-center gap-6">
        <HeaderItem title="Home" address="/" Icon={AiFillHome} />
        <HeaderItem
          title="About"
          address="/about"
          Icon={BsFillInfoCircleFill}
        />
      </div>
      <div className="flex items-center gap-5">
        <DarkMode />
        <Link href="/" className="bg-amber-600 px-5 py-2 rounded-md">
          IMDb
        </Link>
      </div>
    </section>
  );
};

export default Header;
