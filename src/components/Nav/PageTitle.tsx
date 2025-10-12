import { NAV_PAGE_NAMES } from '@/constants/common.ts';
import { useLocation } from 'react-router';

function PageTitle() {
  const location = useLocation();

  return (
    <div
      className={`
        flex h-25 place-content-center items-center text-5xl font-extralight
        uppercase
        sm:border-b sm:border-neutral-950
      `}
    >
      {NAV_PAGE_NAMES[location.pathname]}
    </div>
  );
}

export default PageTitle;
