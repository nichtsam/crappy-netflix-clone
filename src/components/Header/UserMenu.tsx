import BellIcon from "@heroicons/react/24/outline/BellIcon";
import MagnifyingGlassIcon from "@heroicons/react/24/outline/MagnifyingGlassIcon";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function UserMenu() {
  return (
    <ul className="gap-3 flex items-center justify-end">
      <li className="hidden sm:inline ">
        <MagnifyingGlassIcon className="h-6 w-6" />
      </li>

      <li className="hidden lg:inline">
        <Link href="/">Kids</Link>
      </li>

      <li>
        <BellIcon className="h-6 w-6" />
      </li>

      {/* text-[0px] to remove white space below image. ref: https://github.com/vercel/next.js/issues/21914#issuecomment-777886877 */}
      <li className="text-[0px]">
        <Link href="/account">
          <Image
            height={32}
            width={32}
            className="rounded cursor-pointer"
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          />
        </Link>
      </li>
    </ul>
  );
}

export default UserMenu;
