import { Outlet, useLocation } from 'react-router';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer.tsx';
import { useEffect } from 'react';

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
