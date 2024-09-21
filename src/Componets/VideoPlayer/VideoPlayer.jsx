import "./videoPlayer.css";
import video from "../../assets/college-video-6XtGR-D3.mp4";
import { useRef } from "react";

const VideoPlayer = ({ playState, setPlayState }) => {
  const player = useRef(null);

  const closePlayer = (e) => {
    if (e.target === player.current) {
      setPlayState(false);
    }
  };

  return (
    <div
      ref={player}
      className={`video-player ${playState ? "" : "hide"}`}
      onClick={closePlayer}
    >
      <video autoPlay muted controls src={video}></video>
    </div>
  );
};

export default VideoPlayer;
