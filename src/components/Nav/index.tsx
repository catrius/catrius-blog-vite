import FullNav from '@/components/Nav/FullNav.tsx';
import BurgerNav from '@/components/Nav/BurgerNav.tsx';
import PageTitle from '@/components/Nav/PageTitle.tsx';
import Search from '@/components/Nav/Search.tsx';

function Nav() {
  return (
    <>
      <FullNav />
      <BurgerNav />
      <Search />
      <PageTitle />
    </>
  );
}

export default Nav;
