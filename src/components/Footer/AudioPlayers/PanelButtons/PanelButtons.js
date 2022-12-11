import React from "react";
import Box from "@mui/material/Box";
import {IconButton} from "@mui/material";
import PauseCircleIcon from "@mui/icons-material/PauseCircle";
import PlayArrowSharpIcon from "@mui/icons-material/PlayArrowSharp";
import SkipNextSharpIcon from "@mui/icons-material/SkipNextSharp";
import MenuIcon from "@mui/icons-material/Menu";
import TrackInformation from "./TrackInformation/TrackInformation";


function PanelButtons ({ openPlaylist, clickPlay, isPlay, musicPlay }) {
    return (
        <Box
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                bgcolor: "#9e9e9e",
                height: 100,
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    marginLeft: 3,
                    alignItems: 'center'
                }}
            >
                <Box
                    sx={{
                        bgcolor: "#000000",
                        display: "flex",
                        maxHeight: '40px'
                    }}
                >
                    {
                        isPlay
                            ? <IconButton aria-label="pause music" onClick={clickPlay}>
                                <PauseCircleIcon color="primary" fontSize="large"/>
                            </IconButton>
                            : <IconButton aria-label="play music" onClick={clickPlay}>
                                <PlayArrowSharpIcon color="primary" fontSize="large"/>
                            </IconButton>
                    }
                    <IconButton aria-label="next music">
                        <SkipNextSharpIcon color="primary" fontSize="large" />
                    </IconButton>
                </Box>
                <TrackInformation musicPlay={musicPlay}/>
            </Box>
            <Box
                sx={{
                    bgcolor: "#000000",
                    marginRight: 3,
                }}
            >
                <IconButton
                    color="primary"
                    aria-label="open drawer"
                    onClick={openPlaylist}
                >
                    <MenuIcon />
                </IconButton>
            </Box>
        </Box>
    )
}

export default PanelButtons
