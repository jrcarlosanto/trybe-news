import { expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import DateNotice from '../components/DateNotice';

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

  it('Notícia de mesmo dia', () => {
    render(<DateNotice data_publicacao="17/11/2023 14:46:00" />);
    const date = screen.getByText('Hoje');
    expect(date).toBeInTheDocument();
  });

  it('Notícia com 1 dia', () => {
    render(<DateNotice data_publicacao="15/11/2023 14:46:00" />);

    const date = screen.getByText('1 dia atrás');
    expect(date).toBeInTheDocument();
  });

  it('Notícia com  mais de 1 dia', () => {
    render(<DateNotice data_publicacao="14/11/2023 14:45:00" />);

    const date = screen.getByText('2 dias atrás');
    expect(date).toBeInTheDocument();
  });
});
