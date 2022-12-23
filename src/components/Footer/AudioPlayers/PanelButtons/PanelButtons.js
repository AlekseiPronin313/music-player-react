import React from "react";
import Box from "@mui/material/Box";
import {IconButton, Slider, Stack} from "@mui/material";
import PauseCircleIcon from "@mui/icons-material/PauseCircle";
import PlayArrowSharpIcon from "@mui/icons-material/PlayArrowSharp";
import SkipNextSharpIcon from "@mui/icons-material/SkipNextSharp";
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import MenuIcon from "@mui/icons-material/Menu";
import {VolumeDown, VolumeUp} from "@mui/icons-material";
import {useDispatch} from "react-redux";
import { previousTrack} from "../../../../redux/stateReducer";


function PanelButtons({
                          openPlaylist,
                          togglePlayPause,
                          isPlaying,
                          musicPlay,
                          handleVolume,
                          statevolum,
                          playing,
                          setIsPlaying,
                          clickNextTrack
                      }) {
    const dispatch = useDispatch()

    const clickPreviousTrack = () => {
        setIsPlaying(false)
        dispatch(previousTrack(musicPlay.id))
    }

    return (
        <Box className={'footer__panel-buttons'}
            sx={{
                width: '100%',
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                bgcolor: "#9e9e9e",
            }}
        >
            <Box className={'footer__buttons-box'}
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
                                <IconButton variant="contained"
                                            disabled={Number(musicPlay.id) === 1 || !Object.keys(musicPlay).length}
                                            aria-label="previous song" onClick={clickPreviousTrack}>
                                    <SkipPreviousIcon fontSize="large"/>
                                </IconButton>
                            <IconButton aria-label="pause music" variant="contained"
                                        disabled={!Object.keys(musicPlay).length} onClick={togglePlayPause}>
                                {
                                    isPlaying ?
                                        <PauseCircleIcon fontSize="large"/>
                                        : <PlayArrowSharpIcon fontSize="large"/>
                                }
                            </IconButton>
                            <IconButton aria-label="next music" disabled={!Object.keys(musicPlay).length}
                                        variant="contained" onClick={clickNextTrack}>
                                <SkipNextSharpIcon fontSize="large"/>
                            </IconButton>
                        </Box>
            </Box>
            <Box className={'footer__button-box'}
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    bgcolor: "#9e9e9e",
                    marginRight: 3,
                }}
            >
                <Box sx={{
                    width: 200,
                    marginRight: '10px',
                    bgcolor: '#fff',
                    padding: '0 5px',
                    borderRadius: '10px'
                }}>
                    <Stack sx={{height: 30}} spacing={2} direction="row" alignItems="center">
                        <VolumeDown/>
                        <Slider aria-label="Volume"
                                value={Math.round(statevolum * 100)}
                                onChange={(e) => handleVolume(e.target.value / 100)}/>
                        <VolumeUp/>
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
                        <MenuIcon/>
                    </IconButton>
                </Box>
            </Box>
        </Box>
    )
}

export default PanelButtons
