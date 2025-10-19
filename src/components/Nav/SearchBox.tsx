import { IoSearchOutline } from 'react-icons/io5';
import { useState, useEffect, useCallback } from 'react';
import { useNavigate, useSearchParams } from 'react-router';
import { buildSearchPath } from '@/routes.ts';
import { HiXMark } from 'react-icons/hi2';
import { useDebounce } from 'use-debounce';

interface PropsType {
  className?: string;
  auto?: boolean;
}

const DEBOUNCE_TIME = 1000;

function SearchBox({ className = '', auto = false }: PropsType) {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const [params] = useSearchParams();

  const [debounceQuery] = useDebounce(query, DEBOUNCE_TIME);

  const search = useCallback(() => {
    const theQuery = auto ? debounceQuery : query;
    if (!theQuery) {
      return;
    }
    navigate(buildSearchPath(theQuery));
  }, [auto, debounceQuery, navigate, query]);

  useEffect(() => {
    const q = params.get('q') ?? '';
    setQuery(q);
  }, [params]);

  useEffect(() => {
    if (auto) {
      search();
    }
  }, [auto, search]);

  return (
    <div
      className={`
        flex items-center gap-4 px-5
        sm:basis-45 sm:flex-row-reverse
        ${className}
      `}
    >
      {query && (
        <button
          type="button"
          className={`
            hidden cursor-pointer
            sm:block
          `}
        >
          <HiXMark
            className="text-2xl"
            onClick={() => {
              setQuery('');
            }}
          />
        </button>
      )}
      <input
        className="w-10 grow font-light placeholder-neutral-500 outline-0"
        type="text"
        placeholder="Search..."
        onChange={(e) => {
          setQuery(e.target.value);
        }}
        onKeyUp={(e) => {
          if (e.key === 'Enter') {
            search();
          }
        }}
        value={query}
      />
      {query && (
        <button
          type="button"
          className={`
            cursor-pointer
            sm:hidden
          `}
        >
          <HiXMark
            className="text-2xl"
            onClick={() => {
              setQuery('');
            }}
          />
        </button>
      )}
      <button
        className="flex basis-auto"
        type="button"
        onClick={() => {
          search();
        }}
      >
        <IoSearchOutline className="text-xl" />
      </button>
    </div>
  );
}

export default SearchBox;
