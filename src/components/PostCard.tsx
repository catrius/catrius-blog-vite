import type { Post } from '@/api/api.ts';
import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import { Link } from 'react-router';
import { buildPostPath } from '@/routes.ts';

dayjs.extend(localizedFormat);

interface PropsType {
  post: Post;
}

function PostCard({ post }: PropsType) {
  return (
    <Link to={buildPostPath(post.id)} className="sm:max-w-93 sm:border sm:border-neutral-950">
      <div className="mb-7 aspect-16/9 overflow-hidden">
        <img src={post.thumbnail} alt="" />
      </div>
      <div
        className={`
          mx-5 border-b-2 border-b-neutral-200 pb-7
          sm:border-0
        `}
      >
        <div className="mb-4 text-sm/normal font-light">{dayjs(post.created_at).format('ll')}</div>
        <div className="mb-3 overflow-hidden text-2xl/normal font-extralight text-neutral-950 uppercase">
          {post.title}
        </div>
        <div className="overflow-hidden text-base/relaxed font-light text-neutral-950">{post.excerpt}</div>
      </div>
    </Link>
  );
}

export default PostCard;
