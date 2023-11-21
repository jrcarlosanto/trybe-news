import { useContext } from 'react';
import { ButtonStyled } from './styles';
import NoticesContext from '../../context/NoticesContext';
import { SEARCHE } from '../../utils/constants';

type ButtonType = {
  text: string;
};

function ButtonSearch({ text }: ButtonType) {
  const { setLoadingList, setChoiceList } = useContext(NoticesContext);
  const search = () => {
    setChoiceList(SEARCHE);
    setLoadingList(true);
  };
  return (
    <ButtonStyled onClick={ search }>{text}</ButtonStyled>
  );
}

export default ButtonSearch;
