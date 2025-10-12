import { IoSearchOutline } from 'react-icons/io5';

function Search() {
  return (
    <div className="flex items-center gap-4 border-b border-neutral-950 px-5 py-4">
      <input className="grow font-light placeholder-neutral-500 outline-0" type="text" placeholder="Search..." />
      <div className="flex basis-auto">
        <IoSearchOutline className="text-xl" />
      </div>
    </div>
  );
}

export default Search;
