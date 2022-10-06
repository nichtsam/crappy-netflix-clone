import Image from "next/image";
import React from "react";

function Logo() {
  return (
    <div className="relative w-full h-full">
      <Image
        alt="netflix-logo"
        priority
        src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
        layout="fill"
        objectFit="contain"
      />
    </div>
  );
}

export default Logo;
