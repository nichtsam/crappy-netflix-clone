import { TMDB_IMAGE_BASE_URL_W500 } from "@/apis/tmdb/constant";
import { GeneralMovie } from "@/types/tmdb";
import Image from "next/image";
import React from "react";

export interface ThumbnailProps {
  movie: GeneralMovie;
}

function Thumbnail({ movie }: ThumbnailProps) {
  const { title, name, original_title, backdrop_path, poster_path } = movie;
  const alt = title || name || original_title;
  return (
    <div className="inline-block w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6">
      <div className="relative p-[28.125%]">
        <Image
          alt={alt}
          src={`${TMDB_IMAGE_BASE_URL_W500}${backdrop_path || poster_path}`}
          layout="fill"
          objectFit="cover"
          className="rounded-md"
        />
      </div>
    </div>
  );
}

export default Thumbnail;
