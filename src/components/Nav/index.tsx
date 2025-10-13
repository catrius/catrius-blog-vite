import FullNav from '@/components/Nav/FullNav.tsx';
import BurgerNav from '@/components/Nav/BurgerNav.tsx';
import PageTitle from '@/components/Nav/PageTitle.tsx';
import SearchBox from '@/components/Nav/SearchBox.tsx';

function Nav() {
  return (
    <>
      <FullNav />
      <BurgerNav />
      <SearchBox />
      <PageTitle />
    </>
  );
}

export default Nav;
