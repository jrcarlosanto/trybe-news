import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { useContext, useState } from 'react';
import Headlines from './pages/Headlines';
import { GlobalStyle } from './styles/global-styles';
import Header from './components/Header';
import NoticesProvider from './context/NoticesProvider';
import NotFound from './pages/NotFound';
import dark from './styles/themes/dark';
import light from './styles/themes/light';
import { getTheme, setTheme } from './utils/theme';

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(getTheme() === 'dark');

  const toggleTheme = () => {
    if (isDarkTheme) {
      setTheme('light');
    } else {
      setTheme('dark');
    }
    setIsDarkTheme((prev) => !prev);
  };

  return (
    <NoticesProvider>
      <ThemeProvider theme={ isDarkTheme ? dark : light }>
        <GlobalStyle />
        <Routes>
          <Route
            path="/"
            element={ <Header
              toggleTheme={ toggleTheme }
              isDarkTheme={ isDarkTheme }
            /> }
          >
            <Route index element={ <Headlines /> } />
          </Route>
          <Route path="*" element={ <NotFound /> } />
        </Routes>
      </ThemeProvider>
    </NoticesProvider>
  );
}

export default App;
