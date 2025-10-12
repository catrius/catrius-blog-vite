import { useGetPostQuery } from '@/api/api.ts';
import { useParams } from 'react-router';
import dayjs from 'dayjs';

function Post() {
  const params = useParams();
  const { data: posts } = useGetPostQuery({ id: `eq.${params.id}` });
  const post = posts?.[0];

  if (!post) {
    return null;
  }

  return (
    <div className="px-5 py-8">
      <div className="mb-2 text-sm/normal font-light">{dayjs(post.created_at).format('ll')}</div>
      <div className="mb-4 text-3xl/relaxed font-extralight whitespace-pre-wrap text-neutral-950 uppercase">
        {post.title}
      </div>
      <div className="text-base/loose font-light text-neutral-950">{post.content}</div>
    </div>
  );
}

export default Post;
