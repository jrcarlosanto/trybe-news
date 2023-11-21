import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Poller One;
  }

  body {
    background: #F1F2F3;
  }
  
  bottom {
    transition: 200ms ease-in-out 0.025s;
  }

  button:hover {
    transition: 200ms ease-in-out 0.025s;
    cursor: pointer;
    opacity: 0.8;
  }

  button:disabled {
    opacity: 0.5;
    transition: none;
    cursor: default;
  }

  ::-webkit-scrollbar {
    border-radius: 1.25rem;
    background: #444955;
    width: 0.5rem;
    height: 0.5rem;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 1.25rem;
    background: #7E7E7E;
    width: 0.5rem;
    height: 0.5rem;
  }
`;
