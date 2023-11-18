import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Headlines from './pages/Headlines';
import { GlobalStyle } from './styles/global-styles';
import theme from './styles/themes/theme';
import Header from './components/Header';
import NoticesProvider from './context/NoticesProvider';

function App() {
  return (
    <NoticesProvider>
      <ThemeProvider theme={ theme }>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={ <Header /> }>
            <Route index element={ <Headlines /> } />
          </Route>
        </Routes>
      </ThemeProvider>
    </NoticesProvider>
  );
}

export default App;
