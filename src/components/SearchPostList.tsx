import { useLazyGetPostQuery, type Post } from '@/api/api.ts';
import Pagination from '@/components/Pagination.tsx';
import SearchPostCard from '@/components/SearchPostCard.tsx';

interface PropsType {
  getPost: ReturnType<typeof useLazyGetPostQuery>[0];
  posts?: Post[];
}

function SearchPostList({ getPost, posts = [] }: PropsType) {
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
        <Pagination getPost={getPost} />
      </div>
    </div>
  );
}

export default SearchPostList;
