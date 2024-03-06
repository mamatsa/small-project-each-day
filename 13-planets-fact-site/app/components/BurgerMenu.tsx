"use client";

import Image from "next/image";
import { useState } from "react";
import MobileNavItem from "./MobileNavItem";

const BurgerMenu = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const handleMenuClose = () => {
    setTimeout(() => setMenuIsOpen(false), 300);
  };

  return (
    <>
      <Image
        src="./images/icons/icon-hamburger.svg"
        alt="burger menu"
        className="cursor-pointer sm:hidden"
        width={24}
        height={17}
        onClick={() => setMenuIsOpen(!menuIsOpen)}
      />

      {menuIsOpen && (
        <ul
          className="absolute bottom-0 left-0 right-0 top-16 z-50 mt-3 h-full overflow-hidden bg-dark-blue text-xl text-white sm:hidden"
          onClick={handleMenuClose}
        >
          <MobileNavItem href="/" title="MERCURY" color="bg-[#DEF4FC]" />
          <MobileNavItem href="/venus" title="VENUS" color="bg-venus" />
          <MobileNavItem href="/earth" title="EARTH" color="bg-earth" />
          <MobileNavItem href="/mars" title="MARS" color="bg-mars" />
          <MobileNavItem href="/jupiter" title="JUPITER" color="bg-jupiter" />
          <MobileNavItem href="/saturn" title="SATURN" color="bg-saturn" />
          <MobileNavItem href="/uranus" title="URANUS" color="bg-uranus" />
          <MobileNavItem href="/neptune" title="NEPTUNE" color="bg-neptune" />
        </ul>
      )}
    </>
  );
};
export default BurgerMenu;
