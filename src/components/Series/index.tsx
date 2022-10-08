import { GeneralMovie } from "@/types/tmdb";
import React, { useRef, useState } from "react";
import ChevronLeftIcon from "@heroicons/react/24/outline/ChevronLeftIcon";
import ChevronRightIcon from "@heroicons/react/24/outline/ChevronRightIcon";
import Thumbnail from "./Thumbnail";

enum Direction {
  LEFT,
  RIGHT,
}

export interface SeriesProps {
  title: string;
  series: GeneralMovie[];
}

function Series({ title, series }: SeriesProps) {
  const rowRef = useRef<HTMLDivElement>(null);
  const [hasMoved, setHasMoved] = useState(false);

  const handleMove = (direction: Direction) => {
    if (!rowRef.current) {
      return;
    }
  };

  return (
    <div className="px-[4%] my-[3vw] overflow-hidden">
      <h2 className="mb-2 text-xs md:text-[1.4vw] font-semibold text-neutral-400 sm:text-white">
        {title}
      </h2>
      <div className="group relative">
        <ChevronLeftIcon
          onClick={() => handleMove(Direction.LEFT)}
          className="z-10 opacity-0 group-hover:opacity-100 h-9 w-9 cursor-pointer absolute top-0 bottom-0 left-2 m-auto hover:scale-125 transition"
        />

        {/* tailwind space uses margin but netflix does it with padding, hence a cut in layout */}
        <div
          ref={rowRef}
          className="whitespace-nowrap space-x-[0.4vw] text-[0]"
        >
          {series.map((movie) => (
            <Thumbnail key={movie.id} movie={movie} />
          ))}
        </div>

        <ChevronRightIcon
          onClick={() => handleMove(Direction.RIGHT)}
          className="z-10 opacity-0 group-hover:opacity-100 h-9 w-9 cursor-pointer absolute top-0 bottom-0 right-2 m-auto hover:scale-125 transition"
        />
      </div>
    </div>
  );
}

export default Series;
