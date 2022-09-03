import * as React from 'react';
import Footer from './Footer'
import Header from './Header';
import Main from './Main';
import { Box, CssBaseline } from '@mui/material';

function App() {
  const [isOpen, setIsOpen] =
  React.useState(false);

  React.useEffect(() => {
    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    });
  }, []);

  function handleClick() {
    setIsOpen(!isOpen);
  }

  return (
      <Box sx={{flexGrow: 1}}>
      <CssBaseline />
      <Header />
      <Main 
      isOpen={isOpen}
      />
      <Footer 
      drawerOpen={handleClick}
      />
      </Box>
  )
}

export default App