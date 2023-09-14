import { AuthNav } from 'components/AuthNav/AuthNav';
import { selectIsLogin } from 'components/redux/selectors';
import UserMenu from 'components/userMenu';
import { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { NavLinkStyled } from './Layout.styled';

export const Layout = () => {
  const isLogin = useSelector(selectIsLogin);
  return (
    <>
      <header>
        <nav>
          <NavLinkStyled to="/">Home</NavLinkStyled>
        </nav>
        {isLogin ? <UserMenu /> : <AuthNav />}
      </header>
      <Suspense fallback={<p>Loading...</p>}>
        <Outlet />
      </Suspense>
    </>
  );
};
