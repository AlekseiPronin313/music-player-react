import {Box} from "@mui/material";
import * as React from "react";
import Playlist from "./Playlist/Playlist";

function TemporaryDrawer({songs, isOpen, currentSong}) {
    return (
        <Box
            className={`popup ${isOpen && "popup__opened"}`}
            sx={{
                height: "calc(100vh - 200px)",
                bgcolor: "#5e5a5a",
                overflow: "auto",
            }}
        >
            <ul className="playList">
                {songs.map((props) =>
                    <Playlist key={props.id} props={props} currentSong={currentSong}/>
                )}
            </ul>
        </Box>
    );
}

export default TemporaryDrawer;
