import { Box } from "@mui/system";
import * as React from "react";
import TemporaryDrawerContainer from "./TemporaryDrawer/TemporaryDrawContainer";
import VisualizationOfSound from "./VisualizationOfSound/VisualizationOfSound";


function Main({audioRef, setContext}) {
  return (
    <Box
      sx={{
        minHeight: 'calc(100vh - 200px)',
        bgcolor: "#fafafa",
        display: "flex",
        textAlign: 'center',
        alignItems: "flex-end",
      }}
    >
      <VisualizationOfSound audioRef={audioRef} setContext={setContext}/>
      <TemporaryDrawerContainer/>
    </Box>
  );
}

export default Main;
