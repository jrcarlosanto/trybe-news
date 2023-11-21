import { ButtonStyled } from './styles';

type ButtonType = {
  link: string;
  text: string;
};

function ButtonRead({ link, text }: ButtonType) {
  return (
    <ButtonStyled onClick={ () => window.open(link) }>{text}</ButtonStyled>
  );
}

export default ButtonRead;
