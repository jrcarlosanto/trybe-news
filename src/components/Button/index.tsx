import React from 'react';
import { ButtonStyled } from './styles';

type ButtonType = {
  link: string;
  text: string;
};

function Button({ link, text }: ButtonType) {
  return (
    <ButtonStyled onClick={ () => window.open(link) }>{text}</ButtonStyled>
  );
}

export default Button;
