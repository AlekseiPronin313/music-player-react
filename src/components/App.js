import * as React from 'react';
import Header from './Header';
import Main from './Main';
import { Box, CssBaseline } from '@mui/material';
import FooterContainer from "./Footer/FooterContainer";

function App() {
  return (
      <Box sx={{flexGrow: 1}}>
      <CssBaseline />
      <Header />
      <Main/>
      <FooterContainer/>
      </Box>
  )
}

export default App
