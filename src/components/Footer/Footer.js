import * as React from "react";
import AudioPlayers from "./AudioPlayers/AudioPlayers";

function Footer({ openPlaylist, musicPlay }) {
  return (
    <AudioPlayers openPlaylist={openPlaylist} musicPlay={musicPlay}/>
  );
}

export default Footer;
