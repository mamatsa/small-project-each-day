import MoonIcon from "./svgs/MoonIcon";

const Header = () => {
  return (
    <header className="flex items-center justify-between px-4 py-7">
      <h1 className="text-sm font-extrabold">Where in the world?</h1>
      <button className="flex items-end gap-2 text-xs font-semibold">
        <MoonIcon />
        Dark Mode
      </button>
    </header>
  );
};

export default Header;
