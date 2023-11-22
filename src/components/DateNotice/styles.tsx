import styled from 'styled-components';

export const P = styled.p`
  font-family: Poppins;
  font-size: 14px;
  font-weight: 400;
  line-height: 23px;
  letter-spacing: 0em;
  text-align: left;
  color: ${(props) => props.theme.colors.primaryText};
`;
