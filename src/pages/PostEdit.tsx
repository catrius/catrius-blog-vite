import { useGetPostQuery, usePatchPostMutation } from '@/api/api.ts';
import { useParams, useNavigate } from 'react-router';
import dayjs from 'dayjs';
import { useEffect, useState, useMemo } from 'react';
import { scrollToTop } from '@/utils/common.ts';
import MDEditor from '@uiw/react-md-editor';
import LoadingSpinner from '@/components/LoadingSpinner.tsx';
import { buildPostPath } from '@/routes.ts';

function PostEdit() {
  const params = useParams();
  const navigate = useNavigate();
  const idQuery = useMemo(() => `eq.${params.id}`, [params.id]);

  const { data: posts } = useGetPostQuery({ id: idQuery });
  const post = posts?.[0];

  const [editorContent, setEditorContent] = useState<string | undefined>('');
  const [patchPost, { isLoading, isSuccess, isError }] = usePatchPostMutation();

  useEffect(() => {
    scrollToTop();
  }, []);

  useEffect(() => {
    setEditorContent(post?.content || '');
  }, [post?.content]);

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
      <div className="mb-4 flex flex-col items-end">
        <div>
          <button
            type="button"
            className={`
              cursor-pointer bg-neutral-950 px-5 py-2.5 font-light text-neutral-200
              hover:bg-neutral-700
              active:scale-95
            `}
            onClick={() => {
              patchPost({
                id: idQuery,
                // @ts-ignore
                post: {
                  content: editorContent || '',
                },
              })
                .unwrap()
                .then(() => {
                  navigate(buildPostPath(post.id));
                });
            }}
          >
            {!isLoading ? 'Save' : <LoadingSpinner className="scale-75" />}
          </button>
        </div>
        {isSuccess && (
          <div className="font-light text-green-800">
            ✓ Thanks for contacting. I will read the message and reply soon.
          </div>
        )}

        {isError && <div className="font-light text-red-800">× Something wrong happened. Please try again.</div>}
      </div>
      <div className="mb-2 text-sm/normal font-light">{dayjs(post.created_at).format('ll')}</div>
      <div
        className={`
          mb-4 text-3xl/relaxed font-extralight whitespace-pre-wrap text-neutral-950 uppercase
          sm:text-4xl/relaxed
        `}
      >
        {post.title}
      </div>
      <MDEditor value={editorContent} onChange={setEditorContent} height={1000} />
    </div>
  );
}

export default PostEdit;
