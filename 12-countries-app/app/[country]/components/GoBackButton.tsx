"use client";

import Link from "next/link";
import BackArrowIcon from "@/app/components/svgs/BackArrowIcon";
import { useSearchParams } from "next/navigation";

const GoBackButton = () => {
  const searchParams = useSearchParams();
  const searchWord = searchParams.get("search");

  return (
    <Link
      href={{
        pathname: "/",
        query: searchWord && { search: searchWord },
      }}
    >
      <div className="mb-10 flex w-min items-center gap-2 bg-white px-6 py-2 shadow-lg">
        <BackArrowIcon /> <span>Back</span>
      </div>
    </Link>
  );
};

export default GoBackButton;
