import RcPagination from 'rc-pagination';
import { PageSize } from '@/constants/common.ts';
import { type useLazyGetPostQuery, useGetPostQuery } from '@/api/api.ts';
import { useState, useEffect } from 'react';

interface PropsType {
  getPost: ReturnType<typeof useLazyGetPostQuery>[0];
}

function Pagination({ getPost }: PropsType) {
  const { data: posts } = useGetPostQuery({ select: 'count' });
  const [currentPage, setCurrentPage] = useState(1);
  // @ts-ignore
  const total = posts?.[0].count;

  useEffect(() => {
    getPost({
      order: 'created_at.desc',
      limit: PageSize.toString(),
      offset: ((currentPage - 1) * PageSize).toString(),
      // @ts-ignore
      prefer: 'count=exact',
    }).then(() => {
      window.scrollTo(0, 0);
    });
  }, [currentPage, getPost]);

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
