import { useLazyGetPostQuery, type Post } from '@/api/api.ts';
import PostCard from '@/components/PostCard.tsx';
import Pagination from '@/components/Pagination.tsx';

interface PropsType {
  getPost: ReturnType<typeof useLazyGetPostQuery>[0];
  posts?: Post[];
  query?: Record<string, string>;
}

function PostList({ getPost, posts = [], query = undefined }: PropsType) {
  return (
    <div>
      <div className="mb-8 flex w-full flex-wrap place-content-center gap-8">
        {posts?.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
      <div className="flex flex-col items-center">
        <Pagination getPost={getPost} query={query} />
      </div>
    </div>
  );
}

export default PostList;
