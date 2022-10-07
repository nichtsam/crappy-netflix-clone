import React from "react";
import { GeneralMovie } from "@/types/tmdb";
import Image from "next/image";
import { TMDB_IMAGE_BASE_URL } from "@/apis/tmdb/constant";

export interface BannerProps {
  series: GeneralMovie[];
}

function Banner({ series }: BannerProps) {
  const movie = series[7]; // TODO: make this change every hour.
  const { name, title, original_title, overview, backdrop_path, poster_path } =
    movie;

  const bannerTitle = title || name || original_title;

  return (
    <div className="bannerContainer">
      <div className="absolute-full">
        <Image
          alt="banner-image"
          src={`${TMDB_IMAGE_BASE_URL}${backdrop_path || poster_path}`}
          layout="fill"
          objectFit="cover"
        />
      </div>

      <div className="absolute-full">
        <div className="bannerTextContainer">
          {bannerTitle && (
            <h1 className="text-[2vw] text-shadow">{bannerTitle}</h1>
          )}
          {overview && <p className="text-[1.2vw] text-shadow">{overview}</p>}
        </div>
        <div className="absolute top-0 bottom-0 left-0 right-1/4 bg-gradient-to-r from-black/60 to-transparent" />
      </div>
    </div>
  );
}

export default Banner;
