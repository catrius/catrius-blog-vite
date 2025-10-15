import type { Post } from '@/api/api.ts';
import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import { Link } from 'react-router';
import { buildPostPath } from '@/routes.ts';

dayjs.extend(localizedFormat);

interface PropsType {
  post: Post;
}

function SearchPostCard({ post }: PropsType) {
  return (
    <Link to={buildPostPath(post.id)} className="sm:border sm:border-neutral-950">
      <div
        className={`
          border-b-neutral-200
          sm:border-0
        `}
      >
        <div
          className={`
            mb-1 overflow-hidden text-xl/normal font-extralight text-neutral-950 uppercase underline
            decoration-neutral-500
          `}
        >
          {post.title}
        </div>
        <div className="line-clamp-2 overflow-hidden text-base/relaxed font-light text-neutral-950">{post.excerpt}</div>
      </div>
    </Link>
  );
}

export default SearchPostCard;
