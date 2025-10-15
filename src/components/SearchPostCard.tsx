import type { Post } from '@/api/api.ts';
import { Link } from 'react-router';
import { buildPostPath } from '@/routes.ts';

interface PropsType {
  post: Post;
}

function SearchPostCard({ post }: PropsType) {
  return (
    <Link to={buildPostPath(post.id)} className="sm:flex sm:gap-10">
      <div
        className={`
          hidden aspect-3/2 shrink-0 basis-44 overflow-hidden
          sm:block
        `}
      >
        <img src={post.thumbnail} alt="" />
      </div>
      <div className="sm:flex sm:flex-col sm:justify-center">
        <div
          className={`
            mb-1 overflow-hidden text-xl/normal font-extralight text-neutral-950 uppercase underline
            decoration-neutral-500
          `}
        >
          {post.title}
        </div>
        <div
          className={`
            line-clamp-2 overflow-hidden text-base/relaxed font-light text-neutral-950
            sm:line-clamp-3
          `}
        >
          {post.excerpt}
        </div>
      </div>
    </Link>
  );
}

export default SearchPostCard;
