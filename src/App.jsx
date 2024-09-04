import { useRoutes } from 'react-router-dom';
import Router from './routes/Router';
import ScrollToTop from './components/shared/scrollToTop/ScrollToTop';
import { ThemeProvider } from '@mui/material';
import Theme from './theme/Theme';

function App() {
  const routing = useRoutes(Router);
  const theme = Theme();

  return (
    <>
      <ThemeProvider theme={theme}>
        <ScrollToTop>
          {routing}
        </ScrollToTop>
      </ThemeProvider>
    </>
  )
}

export default App
