import { useLazyGetPostQuery } from '@/api/api.ts';
import PostCard from '@/components/PostCard.tsx';
import Pagination from '@/components/Pagination.tsx';

function Home() {
  const [getPost, { data: posts }] = useLazyGetPostQuery();

  return (
    <div>
      <div className="mb-8 flex w-full flex-wrap place-content-center gap-8">
        {posts?.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
      <div className="flex flex-col items-center">
        <Pagination getPost={getPost} />
      </div>
    </div>
  );
}

export default Home;
