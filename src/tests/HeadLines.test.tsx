import { screen, waitFor } from '@testing-library/react';
import { vi } from 'vitest';
import App from '../App';
import { renderWithRouter } from '../utils/renderWithRouter';
import * as getNotices from '../services/getNotices';
import * as getDay from '../utils/diffDays';
import { topNotice } from './mocks/topNotice';

describe('<HeadLines />', () => {
  beforeEach(() => {
    const mockInitial = vi.spyOn(getNotices, 'getFirstNotice');
    mockInitial.mockImplementation(() => Promise.resolve(topNotice));
    vi.spyOn(getDay, 'diffDays').mockReturnValue('Hoje');
    // vi.spyOn(window, 'Date').mockReturnValue('17/11/2023 14:45:00');
    // const mockedData = new Date('2023-11-17T00:00:00.000Z');
    // vi.spyOn(global, 'Date').mockImplementation(() => mockedData);
  });

  afterEach(() => {
    vi.resetAllMocks();
  });

  it('Verificar se o componente TopNotice esta com a notícia.', async () => {
    renderWithRouter(<App />, { route: '/' });
    const loading = await screen.findByAltText('loading');
    await waitFor(() => expect(loading).not.toBeInTheDocument());

    const image = screen.getByAltText('notice');
    const title = screen.getByText(/A luta do IBGE/i);
    const intro = screen.getByText(/A ministra Simone/i);
    const dayPublication = screen.getByText('Hoje');

    expect(image).toHaveProperty('src', 'https://agenciadenoticias.ibge.gov.br/images/agenciadenoticias/ibge/2023_11/Tebet_Dialogos_THUMB.jpg');
    expect(title).toBeInTheDocument();
    expect(intro).toBeInTheDocument();
    expect(dayPublication).toBeInTheDocument();
  });

  it('Favoritar a notícia no compoente TopNotice.', async () => {
    const { user } = renderWithRouter(<App />, { route: '/' });
    const loading = await screen.findByAltText('loading');
    await waitFor(() => expect(loading).not.toBeInTheDocument());

    expect(JSON.parse(localStorage.getItem('listFavorite') as string)).toHaveLength(0);

    const buttonAdd = screen.getByTestId('button-add');
    const notFavorite = screen.getByAltText('heart empty');

    expect(notFavorite).toBeInTheDocument();

    await user.click(buttonAdd);

    expect(JSON.parse(localStorage.getItem('listFavorite') as string)).toHaveLength(1);

    const buttonRemove = screen.getByTestId('button-remove');
    const isFavorite = screen.getByAltText('heart full');

    expect(isFavorite).toBeInTheDocument();

    await user.click(buttonRemove);

    expect(JSON.parse(localStorage.getItem('listFavorite') as string)).toHaveLength(0);

    const newButtonAdd = screen.getByTestId('button-add');

    expect(newButtonAdd).toBeInTheDocument();
  });

  it('Favoritar a notícia no compoente TopNotice.', async () => {
    const { user } = renderWithRouter(<App />, { route: '/' });
    const loading = await screen.findByAltText('loading');
    await waitFor(() => expect(loading).not.toBeInTheDocument());

    const button = screen.getAllByText('Leia a notícia aqui');

    // expect(button[0]).toHaveBeenLastCalledWith('http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/38394-a-luta-do-ibge-chega-a-quem-mais-precisa-a-dona-maria-e-seu-jose-diz-ministra-simone-tebet-em-mensagem-ao-1-encontro-dialogos-ibge-90-anos.html');
    await user.click(button[0]);
  });
});
