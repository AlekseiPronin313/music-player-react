import React from "react";
import Box from "@mui/material/Box";
import {CardMedia, Typography} from "@mui/material";
import {useSelector} from "react-redux";

function TrackInformation() {
    const musicPlay = useSelector(state => state.state.playAudio)
    return (
        <>
            {
                !Object.keys(musicPlay).length
                    ? <Typography variant="h4" color="secondary">
                        Музыка
                    </Typography>
                    : <Box
                    sx={{
                        overflow: 'hidden',
                        borderRadius: '15px',
                        display: "flex",
                        bgcolor: "#fff",
                        padding: '0 7px'
                    }}
                >
                    <CardMedia
                        sx={{
                            width: '50px',
                            height: '50px',
                            marginRight: 1
                        }}
                        component="img"
                        image={musicPlay.img}
                        alt="image"
                    >
                    </CardMedia>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            marginRight: 1,
                            height: '50px'
                        }}>
                        <Typography className={'footer__text'}>{musicPlay.title}</Typography>
                        <Typography className={'footer__text'}>{musicPlay.artistName}</Typography>
                    </Box>
                </Box>
            }
        </>
    )
}

export default TrackInformation
