import { NavItem, BurgerMenu } from "./";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="mb-10 flex h-16 items-center justify-between gap-6 border-b border-b-white border-opacity-20 px-6 py-4 sm:mb-0 sm:h-auto sm:flex-col sm:justify-center md:flex-row md:justify-between 2xl:px-8 2xl:py-6">
      <Link
        href="/"
        className="text-[28px] text-white sm:text-2xl 2xl:text-4xl"
      >
        THE PLANETS
      </Link>
      {/* Desktop menu */}
      <ul className="hidden gap-7 text-sm font-bold tracking-widest text-white sm:flex lg:gap-8 2xl:text-lg">
        <NavItem href="/" title="MERCURY" />
        <NavItem href="/venus" title="VENUS" />
        <NavItem href="/earth" title="EARTH" />
        <NavItem href="/mars" title="MARS" />
        <NavItem href="/jupiter" title="JUPITER" />
        <NavItem href="/saturn" title="SATURN" />
        <NavItem href="/uranus" title="URANUS" />
        <NavItem href="/neptune" title="NEPTUNE" />
      </ul>

      {/* Mobile Menu */}
      <BurgerMenu />
    </nav>
  );
};

export default Navbar;
