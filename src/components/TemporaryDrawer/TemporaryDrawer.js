import { Box } from "@mui/material";
import * as React from "react";
import { CardMedia, Typography } from "@mui/material";
import FavoriteBorderSharpIcon from "@mui/icons-material/FavoriteBorderSharp";
import FavoriteSharpIcon from "@mui/icons-material/FavoriteSharp";

function TemporaryDrawer({songs, isOpen}) {
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
        {songs.map(({ id, isLike, img, title, artistName }) => (
          <li className="playList__box" key={id}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <CardMedia
                className="audio__img"
                component="img"
                image={img}
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
                <span className="playList__title">{title}</span>
                <span className="playList__artistName">{artistName}</span>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <button
                className="playList__button"
                type="button"
                // onClick={() => likeButtonHandler(id)}
              >
                {isLike ? (
                  <FavoriteBorderSharpIcon
                    fontSize="medium"
                    sx={{
                      color: "#9e9e9e",
                      cursor: "pointer",
                    }}
                  />
                ) : (
                  <FavoriteSharpIcon
                    fontSize="medium"
                    sx={{
                      color: "#9e9e9e",
                      cursor: "pointer",
                    }}
                  />
                )}
              </button>
              <Typography color="primary">Время</Typography>
            </Box>
          </li>
        ))}
      </ul>
    </Box>
  );
}

export default TemporaryDrawer;
