import { useLazyGetPostQuery, useGetPostQuery } from '@/api/api.ts';
import { useMemo } from 'react';
import { useSearchParams } from 'react-router';
import SearchPostList from '@/components/SearchPostList.tsx';

function Search() {
  const [getPost, { data: posts }] = useLazyGetPostQuery();
  const [params] = useSearchParams();
  const q = params.get('q') ?? '';

  const query = useMemo(() => {
    const encodedQ = q.replaceAll(' ', '+');

    return {
      content: `fts(english).${encodedQ}`,
    };
  }, [q]);

  const { data: totalPosts } = useGetPostQuery({ select: 'count', ...query });
  // @ts-ignore
  const total = totalPosts?.[0].count;

  return (
    <div
      className={`
        mb-8 px-5
        sm:mx-auto sm:max-w-480
      `}
    >
      <div className="mb-5 font-light">
        {total > 0 ? (
          <span>{`${total} results found for "${q}".`}</span>
        ) : (
          <span>{`No results found for "${q}". Try a new search.`} </span>
        )}
      </div>
      <SearchPostList posts={posts} getPost={getPost} query={query} />
    </div>
  );
}

export default Search;
