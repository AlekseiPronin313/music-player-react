import { Box } from '@mui/material';
import { bgcolor } from '@mui/system';
import * as React from 'react';

function TemporaryDrawer({isOpen}) {
    return (
       <Box  className={`popup ${isOpen && 'popup__opened'}`}
       sx={{
        height: 'calc(100vh - 200px)',
        bgcolor: '#000000'
       }}
       >
        
    </Box> 
    )
    
}

export default TemporaryDrawer