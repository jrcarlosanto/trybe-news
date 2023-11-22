import styled from 'styled-components';

export const HeaderNav = styled.header`
  display: flex;
  margin-bottom: 20px;
  height: 80px;
`;

export const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: ${(props) => props.theme.colors.backgroundHeader};

  h1 {
    color: ${(props) => props.theme.colors.title};
    size: 86px;
    line-height: 15px;
    font-weight: 400;
    letter-spacing: 1.6 px;
  }
`;

export const Section = styled.section`
  display: flex;
  justify-content: center;
`;

export const Main = styled.main`
  width: 85%;
`;

export const ButtonTheme = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  background-color: ${(props) => props.theme.colors.backgroundHeader};
  padding-right: 40px;

  & :hover {
    background-color: ${(props) => props.theme.colors.backgroundHeader};
  }
`;
