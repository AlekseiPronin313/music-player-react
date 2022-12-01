import {Box, IconButton} from "@mui/material";
import * as React from "react";
import {CardMedia, Typography} from "@mui/material";
import FavoriteBorderSharpIcon from "@mui/icons-material/FavoriteBorderSharp";
import FavoriteSharpIcon from "@mui/icons-material/FavoriteSharp";
import {useDispatch, useSelector} from "react-redux";
import {isLikes, playAudio} from "../../../redux/stateReducer";
import PauseCircleIcon from "@mui/icons-material/PauseCircle";
import PlayArrowSharpIcon from "@mui/icons-material/PlayArrowSharp";


function Playlist({props}) {
    const dispatch = useDispatch()
    // const musicPlay = useSelector(state => state.data.activeButtonPlay)
    // console.log(musicPlay)
    const onClickPlay = () => dispatch(playAudio(props.id))
    return (
        <li className="playList__box">
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                }}
            >
                <Box className='playList__music-box' onClick={onClickPlay}>
                    <CardMedia
                        className="audio__img"
                        component="img"
                        image={props.img}
                        alt="image"
                    >
                    </CardMedia>
                    <Box className='playList__button-music'>
                        {/*{*/}
                        {/*    musicPlay*/}
                        {/*        ? <IconButton className='playList__button-play' aria-label="pause music">*/}
                        {/*            <PauseCircleIcon sx={{*/}
                        {/*                color: "#d5d4d4"*/}
                        {/*            }} fontSize="large"/>*/}
                        {/*        </IconButton>*/}
                        {/*        : <IconButton className='playList__button-pause' aria-label="play music">*/}
                        {/*            <PlayArrowSharpIcon color="primary" fontSize="large"/>*/}
                        {/*        </IconButton>*/}
                        {/*}*/}
                    </Box>
                </Box>

                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        textAlign: "left",
                        width: "100%",
                    }}
                >
                    <span className="playList__title">{props.title}</span>
                    <span className="playList__artistName">{props.artistName}</span>
                </Box>
            </Box>
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                }}
            >
                <button className="playList__button"
                        type='button'
                        onClick={() => dispatch(isLikes(props.id))}
                >
                    {
                        props.isLike
                            ? <FavoriteBorderSharpIcon
                                fontSize="medium"
                                sx={{
                                    color: "#9e9e9e",
                                    cursor: "pointer",
                                }}
                            />
                            : <FavoriteSharpIcon
                                fontSize="medium"
                                sx={{
                                    color: "#9e9e9e",
                                    cursor: "pointer",
                                }}
                            />
                    }
                </button>
                <Typography color="primary">Время</Typography>
            </Box>
        </li>
    )
}

export default Playlist;
