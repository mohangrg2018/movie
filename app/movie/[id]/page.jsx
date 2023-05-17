import Image from "next/image";

export default async function moviePage({ params }) {
  const movieId = params.id;
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}`
  );
  const movie = await res.json();
  console.log(movie);
  return (
    <div
      className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-6xl lg:mx-auto my-14 mx-10 
  "
    >
      <div>
        <Image
          src={`https://image.tmdb.org/t/p/original/${
            movie.backdrop_path || movie.poster_path
          }`}
          height={300}
          width={500}
          className="rounded-lg"
          placeholder="blur"
          blurDataURL="/loader.svg"
          alt="Image is not available"
        ></Image>
      </div>
      <div className="space-y-3 text-sm lg:mt-10">
        <h3 className="text-base font-bold">{movie.name || movie.title}</h3>
        <p>
          <span className="font-semibold mr-2">Overview:</span>
          {movie.overview}
        </p>
        <p>
          <span className="font-semibold mr-2">Release date:</span>{" "}
          {movie.release_date}
        </p>
        <p>
          <span className="font-semibold mr-2">Rating:</span>
          {movie.vote_average}
        </p>
      </div>
    </div>
  );
}
