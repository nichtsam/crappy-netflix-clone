import React from "react";

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
        <h1 className="text-[2vw] text-shadow">{title}</h1>
        <p className="text-[1.2vw] text-shadow">{overview}</p>
      </div>
      <div className="absolute top-0 bottom-0 left-0 right-1/4 bg-gradient-to-r from-black/60 to-transparent" />
    </div>
  );
}

export default ForegroundText;
