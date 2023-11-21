import styled from 'styled-components';

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  
  & h1 {
    margin-bottom: 10px;
  }

  & a {
    margin-top: 10px;
  }
`;
