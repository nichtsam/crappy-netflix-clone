import React from "react";
import { GeneralMovie } from "@/types/tmdb";
import { TMDB_IMAGE_BASE_URL } from "@/apis/tmdb/constant";
import BackgroundImage from "./BackgroundImage";
import ForegroundText from "./ForegroundText";

export interface BannerProps {
  series: GeneralMovie[];
}

function Banner({ series }: BannerProps) {
  const movie = series[0]; // TODO: make this change every hour.
  const { title, name, original_title, overview, backdrop_path, poster_path } =
    movie;

  const bannerTitle = title || name || original_title;
  const backgroundImageSrc = `${TMDB_IMAGE_BASE_URL}${
    backdrop_path || poster_path
  }`;

  return (
    <div className="-mt-16 hidden sm:block">
      <div className="bannerContainer">
        <BackgroundImage src={backgroundImageSrc} />
        <ForegroundText title={bannerTitle} overview={overview} />
      </div>
      <div className="pb-[40%] mb-5" />
    </div>
  );
}

export default Banner;
