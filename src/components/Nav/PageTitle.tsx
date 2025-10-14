import { useLocation } from 'react-router';
import { NAV_PAGE_NAMES } from '@/routes';

function PageTitle() {
  const location = useLocation();

  if (!NAV_PAGE_NAMES[location.pathname]) {
    return <div />;
  }

  return (
    <div
      className={`
        flex place-content-center items-center py-5 text-4xl font-extralight uppercase
        sm:border-b sm:border-neutral-950
      `}
    >
      {NAV_PAGE_NAMES[location.pathname]}
    </div>
  );
}

export default PageTitle;
