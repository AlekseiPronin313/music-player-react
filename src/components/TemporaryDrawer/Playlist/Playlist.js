import {Box} from "@mui/material";
import * as React from "react";
import {CardMedia, Typography} from "@mui/material";
import FavoriteBorderSharpIcon from "@mui/icons-material/FavoriteBorderSharp";
import FavoriteSharpIcon from "@mui/icons-material/FavoriteSharp";
import {useDispatch} from "react-redux";
import {isLikes} from "../../../redux/stateReducer";


function Playlist({props}) {
    const dispatch = useDispatch()
    return (
        <li className="playList__box">
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                }}
            >
                <CardMedia
                    className="audio__img"
                    component="img"
                    image={props.img}
                    alt="image"
                ></CardMedia>
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
