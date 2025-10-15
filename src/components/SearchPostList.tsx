import { useLazyGetPostQuery, type Post } from '@/api/api.ts';
import Pagination from '@/components/Pagination.tsx';
import SearchPostCard from '@/components/SearchPostCard.tsx';

interface PropsType {
  getPost: ReturnType<typeof useLazyGetPostQuery>[0];
  posts?: Post[];
  query?: Record<string, string>;
}

function SearchPostList({ getPost, posts = [], query = undefined }: PropsType) {
  return (
    <div>
      <div
        className={`
          mb-8 flex w-full flex-wrap gap-6
          sm:gap-8
        `}
      >
        {posts?.map((post) => (
          <SearchPostCard key={post.id} post={post} />
        ))}
      </div>
      <div className="flex flex-col items-center">
        <Pagination getPost={getPost} query={query} />
      </div>
    </div>
  );
}

export default SearchPostList;
