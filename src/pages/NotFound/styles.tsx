import styled from 'styled-components';

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  color: ${(props) => props.theme.colors.primaryText};

  & img {
    margin-bottom: 40px;
  }

  & h1 {
    margin-bottom: 10px;
  }

  & a {
    margin-top: 10px;
    color: ${(props) => props.theme.colors.primaryText};
  }
`;
