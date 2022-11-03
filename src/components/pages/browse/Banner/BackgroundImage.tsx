import Image from "next/image";
import React from "react";

interface BackgroundImageProps {
  src: string;
}

function BackgroundImage({ src }: BackgroundImageProps) {
  return (
    <div className="absolute-full -z-10">
      <Image
        priority
        alt="banner-image"
        src={src}
        layout="fill"
        objectFit="cover"
      />

      <div className="w-full h-[14.7vw] absolute bottom-0 bg-gradient-to-t from-black" />
    </div>
  );
}

export default BackgroundImage;
