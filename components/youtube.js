"use client";

import YouTube from "react-youtube";

export default function YouTubePlayer({ videoId }) {
  const opts = {
    height: "700",
    width: "100%",
  };

  return <YouTube videoId={videoId} opts={opts} />;
}
