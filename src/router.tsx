import { createBrowserRouter } from 'react-router';
import PATH from '@/routes.ts';
import Home from '@/pages/Home.tsx';
import App from '@/App.tsx';
import Post from '@/pages/Post.tsx';
import Search from '@/pages/Search.tsx';
import Page from '@/pages/Page';

const routes = [
  {
    path: PATH.home,
    element: <Home />,
  },
  {
    path: PATH.post,
    element: <Post />,
  },
  {
    path: PATH.search,
    element: <Search />,
  },
  {
    path: PATH.page,
    element: <Page />,
  },
];

const router = createBrowserRouter([
  {
    element: <App />,
    children: routes,
  },
]);

export default router;
