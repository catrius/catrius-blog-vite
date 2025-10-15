import RcPagination from 'rc-pagination';
import { PageSize } from '@/constants/common.ts';
import { type useLazyGetPostQuery, useGetPostQuery } from '@/api/api.ts';
import { useState, useEffect, useMemo } from 'react';

interface PropsType {
  getPost: ReturnType<typeof useLazyGetPostQuery>[0];
  query?: Record<string, string>;
}

function Pagination({ getPost, query = undefined }: PropsType) {
  const stableQuery = useMemo(() => query ?? {}, [query]);

  const { data: posts } = useGetPostQuery({ select: 'count', ...stableQuery });
  const [currentPage, setCurrentPage] = useState(1);
  // @ts-ignore
  const total = posts?.[0].count;

  useEffect(() => {
    getPost({
      order: 'created_at.desc',
      limit: PageSize.toString(),
      offset: ((currentPage - 1) * PageSize).toString(),
      ...stableQuery,
    }).then(() => {
      window.scrollTo(0, 0);
    });
  }, [currentPage, getPost, stableQuery]);

  if (!total) {
    return null;
  }

  return (
    <RcPagination
      total={total}
      defaultPageSize={PageSize}
      onChange={(current: number) => {
        setCurrentPage(current);
      }}
    />
  );
}

export default Pagination;
