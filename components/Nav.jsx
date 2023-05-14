import NavbarItem from "./NavbarItem";

const Nav = () => {
  return (
    <div className="flex justify-center gap-4 py-5 dark:bg-gray-500 bg-amber-200">
      <NavbarItem title="Trending" param="fetchTrending" />
      <NavbarItem title="TopRated" param="fetchTopRated" />
    </div>
  );
};

export default Nav;
