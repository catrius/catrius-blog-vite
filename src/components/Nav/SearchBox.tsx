import { IoSearchOutline } from 'react-icons/io5';
import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router';
import { buildSearchPath } from '@/routes.ts';

function SearchBox() {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const [params] = useSearchParams();

  useEffect(() => {
    const q = params.get('q') ?? '';
    setQuery(q);
  }, [params]);

  return (
    <div className="flex items-center gap-4 border-b border-neutral-950 px-5 py-4">
      <input
        className="grow font-light placeholder-neutral-500 outline-0"
        type="text"
        placeholder="Search..."
        onChange={(e) => {
          setQuery(e.target.value);
        }}
        onKeyUp={(e) => {
          if (e.key === 'Enter') {
            navigate(buildSearchPath(query));
          }
        }}
        value={query}
      />
      <button
        className="flex basis-auto"
        type="button"
        onClick={() => {
          navigate(buildSearchPath(query));
        }}
      >
        <IoSearchOutline className="text-xl" />
      </button>
    </div>
  );
}

export default SearchBox;
