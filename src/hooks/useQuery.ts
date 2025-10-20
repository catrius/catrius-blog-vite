import { useMemo } from 'react';
import { useSearchParams } from 'react-router';

function useQuery() {
  const [params] = useSearchParams();

  const query = useMemo(() => {
    const q = params.get('q') ?? '';
    if (!q) {
      return '';
    }

    const encodedQ = q.replaceAll(' ', '+');

    return {
      content: `fts(english).${encodedQ}`,
    };
  }, [params]);

  return query;
}

export default useQuery;
