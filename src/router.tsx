import { createBrowserRouter, Outlet } from 'react-router';
import PATH from '@/routes.ts';
import Home from '@/pages/Home.tsx';
import App from '@/App.tsx';
import Post from '@/pages/Post.tsx';
import Search from '@/pages/Search.tsx';
import Page from '@/pages/Page';
import Contact from '@/pages/Contact.tsx';
import PostEdit from '@/pages/PostEdit.tsx';

const routes = [
  {
    path: PATH.home,
    element: <Home />,
  },
  {
    path: PATH.post,
    element: <Outlet />,
    children: [
      { index: true, element: <Post /> },
      { path: PATH.postEdit, element: <PostEdit /> },
    ],
  },
  {
    path: PATH.search,
    element: <Search />,
  },
  {
    path: PATH.page,
    element: <Page />,
  },
  {
    path: PATH.contact,
    element: <Contact />,
  },
];

const router = createBrowserRouter([
  {
    element: <App />,
    children: routes,
  },
]);

export default router;
