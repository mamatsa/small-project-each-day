import Link from "next/link";
import Image from "next/image";

interface Props {
  title: string;
  href: string;
  color: string;
}

const MobileNavItem = ({ title, href, color }: Props) => {
  return (
    <li className="border-b border-gray border-opacity-30 last:border-none">
      <Link href={href} className="flex items-center justify-between px-6 py-5">
        <div className="flex items-center gap-4">
          <div className={`h-5 w-5 rounded-full ${color}`}></div>
          <p>{title}</p>
        </div>
        <Image
          src="./images/icons/icon-chevron.svg"
          width={8}
          height={16}
          alt="arrow"
          className="h-4 w-2"
        />
      </Link>
    </li>
  );
};
export default MobileNavItem;
