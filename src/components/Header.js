import * as React from "react";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

function Header() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        bgcolor: "#9e9e9e",
        height: 100,
      }}
    >
      <Typography variant="h4" color="secondary">
        Музыка
      </Typography>
    </Box>
  );
}

export default Header;
