import ThemeSwitch from "./ThemeSwitch";

const Header = () => {
  return (
    <header className="flex items-center justify-between bg-white px-4 py-7 shadow dark:bg-blue-700 sm:px-12 2xl:px-20">
      <h1 className="text-sm font-extrabold sm:text-base md:text-lg lg:text-xl 2xl:text-2xl">
        Where in the world?
      </h1>
      <ThemeSwitch />
    </header>
  );
};

export default Header;
