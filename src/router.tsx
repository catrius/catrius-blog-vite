import { createBrowserRouter } from 'react-router';
import App from './App.tsx';
import PATH from './routes.ts';

const router = createBrowserRouter([
  {
    path: PATH.home,
    element: <App />,
  },
]);

export default router;
