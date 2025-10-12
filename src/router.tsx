import { createBrowserRouter } from 'react-router';
import PATH from '@/routes.ts';
import Home from '@/pages/Home.tsx';
import App from '@/App.tsx';

const routes = [
  {
    path: PATH.home,
    element: <Home />,
  },
];

const router = createBrowserRouter([
  {
    element: <App />,
    children: routes,
  },
]);

export default router;
