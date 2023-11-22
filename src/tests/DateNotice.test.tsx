import { expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import DateNotice from '../components/DateNotice';
import dark from '../styles/themes/dark';

describe('<DateNotice />', () => {
  beforeEach(() => {
    const mockedData = new Date('2023-11-17T14:45:00.000Z');
    // const mockedData = ('17/11/2023 14:45:00');
    // vi.spyOn(global, 'Date').mockImplementation(() => mockedData);
    vi.useFakeTimers();
    vi.setSystemTime(mockedData);
  });

  afterEach(() => {
    vi.resetAllMocks();
  });

  it('Notícia com mesnos de 1 dia', () => {
    render(
      <ThemeProvider theme={ dark }>
        <DateNotice data_publicacao="17/11/2023 14:46:00" />
      </ThemeProvider>,
    );

    const date = screen.getByText('a menos de 1 dia');
    expect(date).toBeInTheDocument();
  });

  it('Notícia com 1 dia', () => {
    render(
      <ThemeProvider theme={ dark }>
        <DateNotice data_publicacao="15/11/2023 14:46:00" />
      </ThemeProvider>,
    );

    const date = screen.getByText('1 dia atrás');
    expect(date).toBeInTheDocument();
  });

  it('Notícia com  mais de 1 dia', () => {
    render(
      <ThemeProvider theme={ dark }>
        <DateNotice data_publicacao="14/11/2023 14:45:00" />
      </ThemeProvider>,
    );

    const date = screen.getByText('2 dias atrás');
    expect(date).toBeInTheDocument();
  });
});
