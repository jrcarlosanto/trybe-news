import { Outlet } from 'react-router-dom';
import { useContext } from 'react';
import logo from '../../images/logo.svg';
import { Div, HeaderNav, Main, Section } from './styles';
import NoticesContext from '../../context/NoticesContext';
import Loading from '../Loading';

function Header() {
  const { loading } = useContext(NoticesContext);

  if (loading) {
    return (<Loading />);
  }
  return (
    <>
      <HeaderNav>
        <img src={ logo } alt="logo" />
        <Div>
          <h1>TRIBE NEWS</h1>
        </Div>
      </HeaderNav>
      <Section>
        <Main>
          <Outlet />
        </Main>
      </Section>
    </>
  );
}

export default Header;
