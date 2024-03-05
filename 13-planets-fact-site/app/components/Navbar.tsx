import NavItem from "./NavItem";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between border-b border-b-white border-opacity-20 px-6 py-4">
      <Link href="/" className="text-2xl text-white">
        THE PLANETS
      </Link>
      <ul className="flex gap-8 text-sm font-bold tracking-widest text-white">
        <NavItem href="/" title="MERCURY" />
        <NavItem href="/venus" title="VENUS" />
        <NavItem href="/earth" title="EARTH" />
        <NavItem href="/mars" title="MARS" />
        <NavItem href="/jupiter" title="JUPITER" />
        <NavItem href="/saturn" title="SATURN" />
        <NavItem href="/uranus" title="URANUS" />
        <NavItem href="/neptune" title="NEPTUNE" />
      </ul>
    </nav>
  );
};

export default Navbar;
