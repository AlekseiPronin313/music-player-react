import * as React from "react";
import AudioPlayers from "./AudioPlayers/AudioPlayers";

function Footer({ openPlaylist, musicPlay, playing }) {
  return (
    <AudioPlayers openPlaylist={openPlaylist} musicPlay={musicPlay} playing={playing}/>
  );
}

export default Footer;
