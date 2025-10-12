import FullNav from '@/components/Nav/FullNav.tsx';
import BurgerNav from '@/components/Nav/BurgerNav.tsx';
import PageTitle from '@/components/Nav/PageTitle.tsx';

function Nav() {
  return (
    <>
      <FullNav />
      <BurgerNav />
      <PageTitle />
    </>
  );
}

export default Nav;
