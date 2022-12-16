import React from "react";
import Box from "@mui/material/Box";
import {CardMedia, Typography} from "@mui/material";

function TrackInformation({musicPlay}) {
    return (
        <>
            {
                !Object.keys(musicPlay).length ? null : <Box
                    sx={{
                        marginLeft: 3,
                        display: "flex",
                        bgcolor: "#000000",
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
                        <Typography color="primary">{musicPlay.title}</Typography>
                        <Typography color="primary">{musicPlay.artistName}</Typography>
                    </Box>
                </Box>
            }
        </>
    )
}

export default TrackInformation
