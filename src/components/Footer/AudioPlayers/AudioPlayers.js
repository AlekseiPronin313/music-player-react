import React from "react";
import PanelButtons from "./PanelButtons/PanelButtons";
import {Box} from "@mui/system";

function AudioPlayers ({ openPlaylist, clickPlay, isPlay, musicPlay }) {


    return (
        <Box>
            <PanelButtons openPlaylist={openPlaylist} clickPlay={clickPlay} isPlay={isPlay} musicPlay={musicPlay}/>
        </Box>
    )
}

export default AudioPlayers
