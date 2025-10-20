import { useLazyGetPostQuery, useGetPostQuery } from '@/api/api.ts';
import { useSearchParams } from 'react-router';
import SearchPostList from '@/components/SearchPostList.tsx';
import SearchBox from '@/components/Nav/SearchBox.tsx';
import { SEARCH_MIN_CHAR } from '@/constants/common.ts';
import useQuery from '@/hooks/useQuery.ts';

function Search() {
  const [getPost, { data: posts }] = useLazyGetPostQuery();
  const [params] = useSearchParams();
  const q = params.get('q') ?? '';
  const query = useQuery();

  const { data: totalPosts } = useGetPostQuery({ select: 'count', ...query });
  // @ts-ignore
  const total = totalPosts?.[0].count;

  return (
    <div
      className={`
        mt-5 mb-8 px-5
        sm:mx-auto sm:max-w-480
      `}
    >
      <SearchBox className="mb-6 border-2 border-neutral-400 py-3" auto />
      <div className="mb-5 font-light">
        {q.length < SEARCH_MIN_CHAR ? (
          <span>Please input more than 1 character.</span>
        ) : total > 0 ? (
          <span>{`${total} results found for "${q}".`}</span>
        ) : (
          <span>{`No results found for "${q}". Try a new search.`} </span>
        )}
      </div>
      {q.length >= SEARCH_MIN_CHAR && <SearchPostList posts={posts} getPost={getPost} />}
    </div>
  );
}

export default Search;
