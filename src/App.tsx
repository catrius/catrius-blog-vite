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
    // flex h-screen flex-col mb-auto: This combo makes footer sits at bottom
    <div className="flex h-screen flex-col">
      <Nav />
      <div className="mb-auto">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
