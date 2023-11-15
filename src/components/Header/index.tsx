import { Outlet } from 'react-router-dom';
import logo from '../../images/logo.svg';
import { Div, HeaderNav } from './styles';

function Header() {
  return (
    <>
      <HeaderNav>
        <img src={ logo } alt="logo" />
        <Div>
          <h1>TRIBE NEWS</h1>
        </Div>
      </HeaderNav>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Header;
