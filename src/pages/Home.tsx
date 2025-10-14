import { useLazyGetPostQuery } from '@/api/api.ts';
import PostList from '@/components/PostList.tsx';

function Home() {
  const [getPost, { data: posts }] = useLazyGetPostQuery();

  return (
    <div className="mb-8">
      <PostList posts={posts} getPost={getPost} />
    </div>
  );
}

export default Home;
