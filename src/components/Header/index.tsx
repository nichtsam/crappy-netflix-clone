import Link from "next/link";
import React, { useEffect, useState } from "react";
import clsx from "clsx";
import Logo from "@/components/Logo";
import NavMenu from "./NavMenu";
import UserMenu from "./UserMenu";

function Header() {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={clsx({
        "bg-black": hasScrolled,
      })}
    >
      <div className="flex h-full items-center space-x-2 lg:space-x-10">
        <Link href="/" className="inline-block h-5 w-24 md:h-7">
          <Logo />
        </Link>

        <NavMenu />
      </div>

      <div className="flex-grow">
        <UserMenu />
      </div>
    </header>
  );
}

export default Header;
