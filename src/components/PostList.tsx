import { useLazyGetPostQuery, type Post } from '@/api/api.ts';
import PostCard from '@/components/PostCard.tsx';
import Pagination from '@/components/Pagination.tsx';

interface PropsType {
  getPost: ReturnType<typeof useLazyGetPostQuery>[0];
  posts?: Post[];
}

function PostList({ getPost, posts = [] }: PropsType) {
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

export default PostList;
