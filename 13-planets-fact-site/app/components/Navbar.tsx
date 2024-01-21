import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between border-b border-b-white border-opacity-20 px-6 py-4">
      <h1 className="text-2xl text-white">THE PLANETS</h1>
      <ul className="flex gap-8 text-sm font-bold tracking-widest text-white">
        <li className="opacity-70 hover:opacity-100">
          <Link href="/mercury">MERCURY</Link>
        </li>
        <li className="opacity-70 hover:opacity-100">
          <Link href="/venus">VENUS</Link>
        </li>
        <li className="opacity-70 hover:opacity-100">
          <Link href="/earth">EARTH</Link>
        </li>
        <li className="opacity-70 hover:opacity-100">
          <Link href="/mars">MARS</Link>
        </li>
        <li className="opacity-70 hover:opacity-100">
          <Link href="/jupiter">JUPITER</Link>
        </li>
        <li className="opacity-70 hover:opacity-100">
          <Link href="/saturn">SATURN</Link>
        </li>
        <li className="opacity-70 hover:opacity-100">
          <Link href="/uranus">URANUS</Link>
        </li>
        <li className="opacity-70 hover:opacity-100">
          <Link href="/neptune">NEPTUNE</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
