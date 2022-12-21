import * as React from "react";
import AudioPlayers from "./AudioPlayers/AudioPlayers";

function Footer({ openPlaylist, musicPlay, playing, setAudioRef,context }) {
  return (
    <AudioPlayers openPlaylist={openPlaylist}
                  musicPlay={musicPlay} playing={playing}
                  setAudioRef={setAudioRef} context={context}/>
  );
}

export default Footer;
