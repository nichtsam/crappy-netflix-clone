import Link from "next/link";
import React from "react";

function NavMenu() {
  return (
    <nav>
      <ul className="hidden md:flex md:gap-4">
        <li className="headerNav">
          <Link href="/">Home</Link>
        </li>
        <li className="headerNav">
          <Link href="/">TV Shows</Link>
        </li>
        <li className="headerNav">
          <Link href="/">Movies</Link>
        </li>
        <li className="headerNav">
          <Link href="/">New &amp; Popular</Link>
        </li>
        <li className="headerNav">
          <Link href="/">My List</Link>
        </li>
        <li className="headerNav">
          <Link href="/">Browse by Languages</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavMenu;
