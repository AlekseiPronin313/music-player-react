import * as React from "react";
import PlayArrowSharpIcon from "@mui/icons-material/PlayArrowSharp";
import SkipNextSharpIcon from "@mui/icons-material/SkipNextSharp";
import { IconButton, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import MenuIcon from "@mui/icons-material/Menu";
import img from "../img/da.jpg";

function Footer({ drawerOpen }) {
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
          <IconButton aria-label="play music">
            <PlayArrowSharpIcon color="primary" fontSize="large" />
          </IconButton>
          <IconButton aria-label="next music">
            <SkipNextSharpIcon color="primary" fontSize="large" />
          </IconButton>
        </Box>

        <Box
          sx={{
            marginLeft: 3,
            display: "flex",
            bgcolor: "#000000",
          }}
        >
          <img className="audio__img" src={img}></img>
          <Box 
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            marginRight: 2
          }}>
            <Typography color="primary"> Грот</Typography>
            <Typography color="primary">По пути домой</Typography>
          </Box>
        </Box>
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
          onClick={drawerOpen}
        >
          <MenuIcon />
        </IconButton>
      </Box>
    </Box>
  );
}

export default Footer;
