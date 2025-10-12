import { useGetPostQuery } from '@/api/api.ts';
import PostCard from '@/components/PostCard.tsx';

function Home() {
  const { data: posts } = useGetPostQuery({ order: 'created_at.desc' });

  return (
    <div className="flex w-full flex-wrap place-content-center gap-8">
      {posts?.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}

export default Home;
