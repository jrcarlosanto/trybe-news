import { useContext, useState } from 'react';
import nav from '../../images/nav.svg';
import { Button, ButtonOpenSearch, Img, Nav, NavFilter,
  SearcDiv, Search } from './styles';
import NoticesContext from '../../context/NoticesContext';
import { FAVORITE, MOST_RECENT, NOTICE, RELEASE,
  SEARCHE_SUM_QUANTITY } from '../../utils/constants';
import Input from '../Input';
import ButtonSearch from '../ButtonSearch';
import searchIcon from '../../images/searchIcon.svg';

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
    setChoiceList('');
  };

  const underlined = 'underline red';
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
            <Img src={ searchIcon } alt="search" />
          </ButtonOpenSearch>
        </NavFilter>
        <img src={ nav } alt="nav icon" />
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
