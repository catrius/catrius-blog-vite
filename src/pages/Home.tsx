import { useLazyGetPostQuery } from '@/api/api.ts';
import PostList from '@/components/PostList.tsx';

function Home() {
  const [getPost, { data: posts }] = useLazyGetPostQuery();

  return (
    <div
      className={`
        mb-8
        sm:mx-auto sm:max-w-480
      `}
    >
      <PostList posts={posts} getPost={getPost} />
    </div>
  );
}

export default Home;
