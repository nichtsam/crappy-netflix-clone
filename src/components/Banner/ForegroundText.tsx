import React from "react";
import PlayIcon from "@heroicons/react/24/solid/PlayIcon";
import InformationCircleIcon from "@heroicons/react/24/outline/InformationCircleIcon";

interface ForegroundTextProps {
  title?: string;
  overview?: string;
}

function ForegroundText({
  title = "[No Title]",
  overview = "[No Overview]",
}: ForegroundTextProps) {
  return (
    <div className="absolute-full">
      <div className="bannerTextContainer">
        <h1 className="text-lg lg:text-[2vw] text-shadow">{title}</h1>
        <p className="text-[1.2vw] text-shadow">{overview}</p>
        <Actions />
      </div>

      <div className="-z-10 absolute top-0 bottom-0 left-0 right-1/4 bg-gradient-to-r from-black/60 to-transparent" />
    </div>
  );
}

function Actions() {
  return (
    <div className="flex items-center gap-4">
      <button className="text-black bg-white hover:bg-neutral-300 text-[1.8vw] bannerButton">
        <PlayIcon className="h-5 w-5 md:h-7 md:w-7" />
        Play
      </button>
      <button className="text-white bg-neutral-500 hover:bg-neutral-500/50 text-[1.8vw] bannerButton">
        <InformationCircleIcon className="h-5 w-5 md:h-8 md:w-8" />
        More Info
      </button>
    </div>
  );
}

export default ForegroundText;
