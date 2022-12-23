import * as React from "react";
import { Box } from "@mui/material";
import TrackInformation from "./TrackInformation/TrackInformation";

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
            <TrackInformation />
        </Box>
    );
}

export default Header;
