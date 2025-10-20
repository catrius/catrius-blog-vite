import RcPagination from 'rc-pagination';
import { PAGE_SIZE } from '@/constants/common.ts';
import { type useLazyGetPostQuery, useGetPostQuery } from '@/api/api.ts';
import { useEffect, useMemo } from 'react';
import useQuery from '@/hooks/useQuery.ts';
import { useSearchParams } from 'react-router';
import { scrollToTop } from '@/utils/common.ts';

interface PropsType {
  getPost: ReturnType<typeof useLazyGetPostQuery>[0];
}

function Pagination({ getPost }: PropsType) {
  const query = useQuery();
  const [params, setParams] = useSearchParams();
  const q = params.get('q') ?? '';

  const { data: posts } = useGetPostQuery({ select: 'count', ...query });
  const page = useMemo(() => {
    const pageParam = params.get('page') ?? '1';
    return parseInt(pageParam, 10);
  }, [params]);

  // @ts-ignore
  const total = posts?.[0].count;

  useEffect(() => {
    getPost({
      order: 'created_at.desc',
      limit: PAGE_SIZE.toString(),
      offset: ((page - 1) * PAGE_SIZE).toString(),
      ...query,
    });
  }, [page, getPost, query]);

  if (!total) {
    return null;
  }

  return (
    <RcPagination
      total={total}
      defaultPageSize={PAGE_SIZE}
      onChange={(current: number) => {
        setParams({ page: current.toString(), q });
        scrollToTop();
      }}
    />
  );
}

export default Pagination;
