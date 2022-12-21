import * as React from 'react';
import Header from './Header';
import Main from './Main';
import { Box, CssBaseline } from '@mui/material';
import FooterContainer from "./Footer/FooterContainer";
import {useState} from "react";

function App() {
    const [ audioRef, setAudioRef ] = useState()
    const [ context, setContext ] = useState()
  return (
      <Box sx={{flexGrow: 1}}>
      <CssBaseline />
      <Header />
      <Main audioRef={audioRef} setContext={setContext}/>
      <FooterContainer context={context} setAudioRef={setAudioRef}/>
      </Box>
  )
}

export default App
