import * as React from "react";
import PlayArrowSharpIcon from "@mui/icons-material/PlayArrowSharp";
import SkipNextSharpIcon from "@mui/icons-material/SkipNextSharp";
import {CardMedia, IconButton, Typography} from "@mui/material";
import Box from "@mui/material/Box";
import MenuIcon from "@mui/icons-material/Menu";
import PauseCircleIcon from '@mui/icons-material/PauseCircle';

function Footer({ openPlaylist, clickPlay, isPlay, musicPlay }) {
    console.log(musicPlay)
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
          {
              musicPlay === undefined ?  null : <Box
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
  );
}

export default Footer;
