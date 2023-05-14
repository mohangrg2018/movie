import React from "react";
import Link from "next/link";

const HeaderItem = ({ title, address, Icon }) => {
  return (
    <div>
      <Icon className="text-2xl hover:text-amber-600 cursor-pointer sm:hidden" />
      <Link
        href={address}
        className="text-lg font-semibold hidden sm:inline-block hover:text-amber-600"
      >
        {title}
      </Link>
    </div>
  );
};

export default HeaderItem;
