import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import * as React from "react";
import TemporaryDrawerContainer from "./TemporaryDrawer/TemporaryDrawContainer";


function Main({isOpen}) {
  return (
    <Box
      sx={{
        minHeight: 'calc(100vh - 200px)',
        bgcolor: "#fafafa",
        display: "flex",
        textAlign: 'center',
        alignItems: "center",
      }}
    >
      <Container>
        <Typography variant="h3">Эквалайзер</Typography>
      </Container>
      <TemporaryDrawerContainer
      isOpen={isOpen}
      />
    </Box>
  );
}

export default Main;
