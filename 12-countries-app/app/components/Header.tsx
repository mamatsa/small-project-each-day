import { MoonIcon } from "@/app/components";

const Header = () => {
  return (
    <header className="flex items-center justify-between bg-white px-4 py-7 shadow sm:px-12 2xl:px-20">
      <h1 className="text-sm font-extrabold sm:text-base md:text-lg lg:text-xl 2xl:text-2xl">
        Where in the world?
      </h1>
      <button className="flex items-end gap-2 text-xs font-semibold sm:gap-3 sm:text-sm lg:gap-4 lg:text-base 2xl:text-lg">
        <MoonIcon />
        <span className="-mb-[2px] self-end">Dark Mode</span>
      </button>
    </header>
  );
};

export default Header;
