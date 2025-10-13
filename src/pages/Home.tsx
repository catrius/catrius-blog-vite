import { useLazyGetPostQuery } from '@/api/api.ts';
import PostList from '@/components/PostList.tsx';

function Home() {
  const [getPost, { data: posts }] = useLazyGetPostQuery();

  return <PostList posts={posts} getPost={getPost} />;
}

export default Home;
