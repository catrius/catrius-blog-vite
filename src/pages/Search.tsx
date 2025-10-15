import { useLazyGetPostQuery } from '@/api/api.ts';
import { useMemo } from 'react';
import { useSearchParams } from 'react-router';
import PostList from '@/components/PostList.tsx';

function Search() {
  const [getPost, { data: posts }] = useLazyGetPostQuery();
  const [params] = useSearchParams();

  const query = useMemo(() => {
    const q = params.get('q') ?? '';
    const encodedQ = q.replaceAll(' ', '+');

    return {
      content: `fts(english).${encodedQ}`,
    };
  }, [params]);

  return (
    <div
      className={`
        mb-8
        sm:mx-auto sm:max-w-480
      `}
    >
      <PostList posts={posts} getPost={getPost} query={query} />
    </div>
  );
}

export default Search;
