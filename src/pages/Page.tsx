import { useGetPageQuery } from '@/api/api.ts';
import { useParams } from 'react-router';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

function Page() {
  const params = useParams();
  const { data: pages } = useGetPageQuery({ name: `eq.${params.name}` });
  const page = pages?.[0];

  if (!page) {
    return null;
  }

  return (
    <div
      className={`
        px-5 py-8
        sm:mx-auto sm:my-5 sm:max-w-300
      `}
    >
      <div
        className={`
          mb-4 text-center text-3xl/relaxed font-extralight whitespace-pre-wrap text-neutral-950 uppercase
          sm:text-4xl/relaxed
        `}
      >
        {page.title}
      </div>
      <div className="no-twp">
        <Markdown remarkPlugins={[remarkGfm]}>{page.content}</Markdown>
      </div>
    </div>
  );
}

export default Page;
