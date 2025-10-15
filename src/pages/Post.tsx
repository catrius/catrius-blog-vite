import { useGetPostQuery } from '@/api/api.ts';
import { useParams } from 'react-router';
import dayjs from 'dayjs';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

function Post() {
  const params = useParams();
  const { data: posts } = useGetPostQuery({ id: `eq.${params.id}` });
  const post = posts?.[0];

  if (!post) {
    return null;
  }

  return (
    <div
      className={`
        px-5 py-8
        sm:mx-auto sm:my-5 sm:max-w-400
      `}
    >
      <div className="mb-2 text-sm/normal font-light">{dayjs(post.created_at).format('ll')}</div>
      <div
        className={`
          mb-4 text-3xl/relaxed font-extralight whitespace-pre-wrap text-neutral-950 uppercase
          sm:text-4xl/relaxed
        `}
      >
        {post.title}
      </div>
      <div className="no-twp">
        <Markdown remarkPlugins={[remarkGfm]}>{post.content}</Markdown>
      </div>
    </div>
  );
}

export default Post;
