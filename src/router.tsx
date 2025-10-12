import { createBrowserRouter } from 'react-router';
import PATH from '@/routes.ts';
import Home from '@/pages/Home.tsx';
import App from '@/App.tsx';
import Post from '@/pages/Post.tsx';

const routes = [
  {
    path: PATH.home,
    element: <Home />,
  },
  {
    path: PATH.post,
    element: <Post />,
  },
];

const router = createBrowserRouter([
  {
    element: <App />,
    children: routes,
  },
]);

export default router;
