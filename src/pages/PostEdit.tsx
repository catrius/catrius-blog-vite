import { useGetPostQuery } from '@/api/api.ts';
import { useParams, useNavigate } from 'react-router';
import dayjs from 'dayjs';
import { useEffect, useState, useMemo, useCallback } from 'react';
import { scrollToTop } from '@/utils/common.ts';
import MDEditor from '@uiw/react-md-editor';
import LoadingSpinner from '@/components/LoadingSpinner.tsx';
import { buildPostPath } from '@/routes.ts';
import supabase from '@/lib/supabase.ts';
import useSupaQuery from '@/hooks/useSupaQuery.ts';

function PostEdit() {
  const params = useParams();
  const navigate = useNavigate();
  const idQuery = useMemo(() => `eq.${params.id}`, [params.id]);

  const { data: posts } = useGetPostQuery({ id: idQuery });
  const post = posts?.[0];

  const [editorContent, setEditorContent] = useState<string | undefined>('');

  const updatePostCallback = useCallback(
    async () => supabase.from('post').update({ content: editorContent }).eq('id', params.id),
    [editorContent, params.id],
  );
  const [patchPost, { isLoading, isSuccess, isError, error }] = useSupaQuery(updatePostCallback);

  useEffect(() => {
    scrollToTop();
  }, []);

  useEffect(() => {
    setEditorContent(post?.content || '');
  }, [post?.content]);

  useEffect(() => {
    if (isSuccess) {
      navigate(buildPostPath(params.id || ''));
    }
  }, [isSuccess, navigate, params.id]);

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
      <div className="mb-4 flex flex-col items-end gap-2">
        <div>
          <button
            type="button"
            className={`
              cursor-pointer bg-neutral-950 px-5 py-2.5 font-light text-neutral-200
              hover:bg-neutral-700
              active:scale-95
            `}
            onClick={() => {
              patchPost();
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

        {isError && <div className="font-light text-red-800">{error?.message}</div>}
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
