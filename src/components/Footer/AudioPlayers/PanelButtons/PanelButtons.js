import React from "react";
import Box from "@mui/material/Box";
import {IconButton, Slider, Stack} from "@mui/material";
import PauseCircleIcon from "@mui/icons-material/PauseCircle";
import PlayArrowSharpIcon from "@mui/icons-material/PlayArrowSharp";
import SkipNextSharpIcon from "@mui/icons-material/SkipNextSharp";
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import MenuIcon from "@mui/icons-material/Menu";
import TrackInformation from "./TrackInformation/TrackInformation";
import {VolumeDown, VolumeUp} from "@mui/icons-material";
import {useDispatch} from "react-redux";
import {nextTrack} from "../../../../redux/stateReducer";


function PanelButtons ({ openPlaylist, togglePlayPause, isPlaying, musicPlay, handleVolume, statevolum, playing, setIsPlaying}) {

    const dispatch = useDispatch()

    const clickNextTrack = () => {
        setIsPlaying(false)
        dispatch(nextTrack(musicPlay.id))
    }

    return (
        <Box
            sx={{
                width: '100%',
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                bgcolor: "#9e9e9e",
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
                        bgcolor: "#fff",
                        display: "flex",
                        maxHeight: '40px',
                        margin: '5px 0',
                        borderRadius: '15px',
                    }}
                >
                    <IconButton aria-label="previous music">
                        <SkipPreviousIcon sx={{color: '#000'}} fontSize="large" />
                    </IconButton>
                    {
                        isPlaying
                            ? <IconButton aria-label="pause music" onClick={togglePlayPause}>
                                <PauseCircleIcon sx={{color: '#000'}} fontSize="large"/>
                            </IconButton>
                            : <IconButton aria-label="play music" onClick={togglePlayPause}>
                                <PlayArrowSharpIcon sx={{color: '#000'}} fontSize="large"/>
                            </IconButton>
                    }
                    <IconButton aria-label="next music" onClick={clickNextTrack}>
                        <SkipNextSharpIcon sx={{color: '#000'}} fontSize="large" />
                    </IconButton>
                </Box>
                <TrackInformation musicPlay={musicPlay}/>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    bgcolor: "#9e9e9e",
                    marginRight: 3,
                }}
            >
                <Box sx={{ width: 200,
                    marginRight: '10px',
                    bgcolor: '#fff',
                    padding: '0 5px',
                    borderRadius: '10px'
                }}>
                    <Stack spacing={3} direction="row" alignItems="center">
                        <VolumeDown />
                        <Slider aria-label="Volume"
                                value={Math.round(statevolum * 100)}
                                onChange={(e) => handleVolume(e.target.value / 100)} />
                        <VolumeUp />
                    </Stack>
                </Box>
                <Box sx={{
                    bgcolor: '#fff',
                    borderRadius: '10px'
                }}>
                    <IconButton
                        sx={{color: '#000'}}
                        aria-label="open drawer"
                        onClick={openPlaylist}>
                        <MenuIcon />
                    </IconButton>
                </Box>
            </Box>
        </Box>
    )
}

export default PanelButtons
