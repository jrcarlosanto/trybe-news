import styled from 'styled-components';

export const Card = styled.div`
  width: 438px;
  height: 331px;
  border-radius: 5px;
  margin: 10px;
  background-color: ${(props) => props.theme.colors.white};
  padding: 15px;
  box-shadow: 0px 4px 4px 0px ${(props) => props.theme.colors.shadow};
  display: flex;
  flex-direction: column;
  justify-content: center;

  & h3 {
    font-family: IBM Plex Serif;
    font-size: 18px;
    font-weight: 600;
    line-height: 27px;
    letter-spacing: 0em;
    text-align: left;
    margin-bottom: 5px;
    height: 408px;
  }

  & hr {
    margin-top: 15px;
    color: ${(props) => props.theme.colors.black};
    opacity: 0.1px;
    margin-bottom: 10px;
  }
`;

export const P = styled.p`
    font-family: Nunito Sans;
    font-size: 15px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: left;
    margin-bottom: 25px;
    height: 408px;
`;

export const DivDateButton = styled.div`
    margin-top: 4px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const DivFavorite = styled.div`
    margin-top: 4px;
    display: flex;
    justify-content: end;
    align-items: center;
`;
