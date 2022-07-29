import { createTheme, ThemeProvider } from '@mui/material';
import './App.css';
import Layout from './Pages/PageLayout';

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        light: '$9c7aff',
        main: '#654de5',
        dark: '#2322b2',
        contrastText: '#fff',
      }
}});
  return (
    <div className='App'>
      <div className='content-wrapper'>
      <ThemeProvider theme={theme}>

        <Layout/>
      </ThemeProvider>
      </div>
    </div>
  );
}

export default App;
