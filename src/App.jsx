import { useRoutes } from 'react-router-dom';
import Spinner from './components/uiComponents/Spinner'
import Router from './routes/Router';
import ScrollToTop from './components/shared/ScrollToTop';

function App() {
  const routing = useRoutes(Router);

  return (
    <>
      <ScrollToTop>{routing}</ScrollToTop>
    </>
  )
}

export default App
