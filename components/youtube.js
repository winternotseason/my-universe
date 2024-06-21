"use client";

import YouTube from "react-youtube";

export default function YouTubePlayer({ videoId }) {
  const opts = {
    height: "900",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  return <YouTube videoId={videoId} opts={opts} />;
}
