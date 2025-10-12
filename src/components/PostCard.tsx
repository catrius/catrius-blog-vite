import type { Post } from '@/api/api.ts';
import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat';

dayjs.extend(localizedFormat);

interface PropsType {
  post: Post;
}

function PostCard({ post }: PropsType) {
  return (
    <div
      className={`
        text-justify
        sm:max-w-93 sm:border sm:border-neutral-950
      `}
    >
      <div className="mb-7 h-62.5 overflow-hidden">
        <img src={post.thumbnail} alt="" />
      </div>
      <div className="mx-5 border-b-2 border-b-neutral-200 pb-7">
        <div className="mb-4 text-sm/normal font-light">{dayjs(post.created_at).format('ll')}</div>
        <div
          className={`
            mb-3 text-2xl/normal font-extralight text-neutral-950 uppercase
          `}
        >
          {post.title}
        </div>
        <div className="text-base/relaxed font-light text-neutral-950">{post.excerpt}</div>
      </div>
    </div>
  );
}

export default PostCard;
