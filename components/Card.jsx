import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsFillHandThumbsUpFill } from "react-icons/bs";

const Card = ({ result }) => {
  return (
    <div className="cursor-pointer sm:p-3 sm:m-2 sm:hover:shadow-slate-400 sm:shadow-md  sm:border sm:border-slate-300 rounded-lg transition-shadow duration-300">
      <Link href={`/movie/${result.id}`} className="space-y-3">
        <Image
          src={`https://image.tmdb.org/t/p/original/${
            result.backdrop_path || result.poster_path
          }`}
          height={300}
          width={500}
          className="sm:rounded-t-lg hover:opacity-80 transition-opacity duration-300 object-cover"
          style={{ maxWidth: "100%", height: "150px" }}
          placeholder="blur"
          blurDataURL="/loader.svg"
          alt="Image is not available"
        />
        <p className="line-clamp-3">{result.overview}</p>
        <p className="font-bold line-clamp-1">{result.title || result.name}</p>
        <div className="flex justify-between items-center">
          <p>{result.release_date || result.first_air_date}</p>
          <p className="flex gap-2 items-center">
            <BsFillHandThumbsUpFill /> {result.vote_count}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Card;
