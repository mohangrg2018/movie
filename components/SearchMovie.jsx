"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const SearchMovie = () => {
  const [search, setSearch] = useState("");

  const router = useRouter();
  const HandleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;
    router.push(`/search/${search}`);
    setSearch("");
  };

  return (
    <form
      onSubmit={HandleSubmit}
      className="flex justify-between items-center my-2 max-w-6xl mx-auto px-6"
    >
      <input
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        type="text"
        className="bg-transparent outline-none flex-1"
        placeholder="Search Movies..."
      />
      <button
        disabled={!search}
        type="button"
        className="text-amber-600 text-lg"
      >
        Search
      </button>
    </form>
  );
};

export default SearchMovie;
