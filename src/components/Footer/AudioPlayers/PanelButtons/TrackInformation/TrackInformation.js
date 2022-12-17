import React from "react";
import Box from "@mui/material/Box";
import {CardMedia, Typography} from "@mui/material";

function TrackInformation({musicPlay}) {
    return (
        <>
            {
                !Object.keys(musicPlay).length ? null : <Box
                    sx={{
                        overflow: 'hidden',
                        borderRadius: '15px',
                        marginLeft: 3,
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
                        <Typography sx={{color: '#000'}}>{musicPlay.title}</Typography>
                        <Typography sx={{color: '#000'}}>{musicPlay.artistName}</Typography>
                    </Box>
                </Box>
            }
        </>
    )
}

export default TrackInformation
