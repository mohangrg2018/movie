import NavbarItem from "./NavbarItem";

const Nav = () => {
  return (
    <div className="flex justify-center gap-8 py-5 my-6 dark:bg-gray-500 bg-amber-200 font-bold">
      <NavbarItem title="Trending" param="fetchTrending" />
      <NavbarItem title="TopRated" param="fetchTopRated" />
    </div>
  );
};

export default Nav;
