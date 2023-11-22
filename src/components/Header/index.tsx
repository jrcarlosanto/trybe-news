import { Outlet } from 'react-router-dom';
import { useContext } from 'react';
import logo from '../../images/logo.svg';
import { ButtonTheme, Div, HeaderNav, Main, Section } from './styles';
import NoticesContext from '../../context/NoticesContext';
import Loading from '../Loading';
import iconSun from '../../images/icon-sun.svg';
import iconMoon from '../../images/icon-moon.svg';

type HeaderType = {
  toggleTheme: () => void;
  isDarkTheme: boolean;
};

function Header({ toggleTheme, isDarkTheme }: HeaderType) {
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
        <ButtonTheme onClick={ toggleTheme }>
          <img src={ isDarkTheme ? iconSun : iconMoon } alt="Toggle theme" />
        </ButtonTheme>
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
