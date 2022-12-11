import * as React from "react";
import AudioPlayers from "./AudioPlayers/AudioPlayers";

function Footer({ openPlaylist, clickPlay, isPlay, musicPlay }) {
  return (
    <AudioPlayers openPlaylist={openPlaylist} clickPlay={clickPlay} isPlay={isPlay} musicPlay={musicPlay}/>
  );
}

export default Footer;
