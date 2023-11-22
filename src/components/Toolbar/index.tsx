import { useContext, useState } from 'react';
import navBlack from '../../images/nav-dark.svg';
import navWhite from '../../images/nav-white.svg';
import { Button, ButtonOpenSearch, Img, Nav, NavFilter,
  SearcDiv, Search } from './styles';
import NoticesContext from '../../context/NoticesContext';
import { FAVORITE, MOST_RECENT, NOTICE, RELEASE,
  SEARCHE_SUM_QUANTITY } from '../../utils/constants';
import Input from '../Input';
import ButtonSearch from '../ButtonSearch';
import searchIconBlack from '../../images/searchIcon-black.svg';
import searchIconWhite from '../../images/searchIcon-white.svg';
import { getTheme } from '../../utils/theme';

function Toolbar() {
  const { setLoadingList, setChoiceList, choiceList,
    setQuantity, quantity, setSearch } = useContext(NoticesContext);
  const [searchButton, setSearchButton] = useState(false);

  const getList = (value: string) => {
    if (value === choiceList) {
      setQuantity(quantity + SEARCHE_SUM_QUANTITY);
    } else {
      setChoiceList(value);
      setQuantity(SEARCHE_SUM_QUANTITY);
    }
    setLoadingList(true);
    setSearchButton(false);
    setSearch('');
  };

  const showSearch = () => {
    setSearchButton(!searchButton);
  };

  const choiceIcon = getTheme() === 'dark';
  const underlined = 'underline #C31815 2px solid';
  return (
    <>
      <Nav>
        <NavFilter>
          <Button
            data-testid="most-recent"
            onClick={ () => getList(MOST_RECENT) }
            style={ choiceList === MOST_RECENT ? { textDecoration: underlined } : {} }
          >
            Mais recentes
          </Button>
          <Button
            data-testid="release"
            onClick={ () => getList(RELEASE) }
            style={ choiceList === RELEASE ? { textDecoration: underlined } : {} }
          >
            Release
          </Button>
          <Button
            data-testid="notice"
            onClick={ () => getList(NOTICE) }
            style={ choiceList === NOTICE ? { textDecoration: underlined } : {} }
          >
            Notícia
          </Button>
          <Button
            data-testid="favorite"
            onClick={ () => getList(FAVORITE) }
            style={ choiceList === FAVORITE ? { textDecoration: underlined } : {} }
          >
            Favoritas
          </Button>
          <ButtonOpenSearch
            data-testid="search"
            onClick={ showSearch }
          >
            { choiceIcon
              ? <Img src={ searchIconWhite } alt="search" />
              : <Img src={ searchIconBlack } alt="search" /> }
          </ButtonOpenSearch>
        </NavFilter>
        { choiceIcon
          ? <img src={ navWhite } alt="nav icon" />
          : <img src={ navBlack } alt="nav icon" />}
      </Nav>
      { searchButton && (
        <SearcDiv>
          <Search>
            <Input />
            <ButtonSearch text="Buscar" />
          </Search>
        </SearcDiv>
      ) }

    </>
  );
}

export default Toolbar;
