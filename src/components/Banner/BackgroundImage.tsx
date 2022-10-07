import Image from "next/image";
import React from "react";

interface BackgroundImageProps {
  src: string;
}

function BackgroundImage({ src }: BackgroundImageProps) {
  return (
    <div className="absolute-full -z-10">
      <Image alt="banner-image" src={src} layout="fill" objectFit="cover" />
    </div>
  );
}

export default BackgroundImage;
