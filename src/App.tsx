import { Outlet } from 'react-router';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer.tsx';

function App() {
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
