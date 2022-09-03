import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider, createTheme} from '@mui/material';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';

const theme = createTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#9e9e9e',
      dark: '#002884',
      contrastText: '#fafafa',
    },
    secondary: {
      light: '#ff7961',
      main: '#fafafa',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
