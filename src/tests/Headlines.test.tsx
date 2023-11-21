import { fireEvent, screen, waitFor } from '@testing-library/react';
import { vi } from 'vitest';
import { mockAllIsIntersecting } from 'react-intersection-observer/test-utils';
import { defaultFallbackInView } from 'react-intersection-observer';
import App from '../App';
import { renderWithRouter } from '../utils/renderWithRouter';
import * as getNotices from '../services/getNotices';
import * as getDay from '../utils/diffDays';
import { noticesAndReleases } from './mocks/noticesAndReleases';
import { releases } from './mocks/releases';
import { notices } from './mocks/notices';

describe('<Headlines />', () => {
  beforeEach(() => {
    const mockInitial = vi.spyOn(getNotices, 'getNoticesAndReleases');
    mockInitial.mockImplementationOnce(() => Promise.resolve(noticesAndReleases));
    mockInitial.mockImplementationOnce(() => Promise.resolve(noticesAndReleases));
    vi.spyOn(getDay, 'diffDays').mockReturnValue('Hoje');
    // vi.spyOn(window, 'Date').mockReturnValue('17/11/2023 14:45:00');
    // const mockedData = new Date('2023-11-17T00:00:00.000Z');
    // vi.spyOn(global, 'Date').mockImplementation(() => mockedData);
    /* window.IntersectionObserver = vi.fn().mockImplementation(() => ({
      observe: () => null,
      unobserve: () => null,
      disconnect: () => null,
    })); */
    /* const mockIntersectionObserver = vi.fn();
    mockIntersectionObserver.mockReturnValue({
      observe: () => null,
      unobserve: () => null,
      disconnect: () => null,
    });
    window.IntersectionObserver = mockIntersectionObserver; */

    /* const mockIntersectionObserver = vi.fn();
    mockIntersectionObserver.mockReturnValue({
      observe: vi.fn().mockReturnValue(null),
      unobserve: vi.fn().mockReturnValue(null),
      disconnect: vi.fn().mockReturnValue(null),
    }); */
    // window.IntersectionObserver = mockIntersectionObserver;
    mockAllIsIntersecting(true);
    const mockReleases = vi.spyOn(getNotices, 'getReleases');
    mockReleases.mockImplementation(() => Promise.resolve(releases));
    const mockNotices = vi.spyOn(getNotices, 'getNotices');
    mockNotices.mockImplementation(() => Promise.resolve(notices));
    const mockSearch = vi.spyOn(getNotices, 'getSearch');
    mockSearch.mockImplementation(() => Promise.resolve(notices));
  });

  afterEach(() => {
    vi.resetAllMocks();
    localStorage.clear();
  });
  const listElements = 'element-list';
  const buttonFavorite = 'button-add';
  const buttonRemoveFavorite = 'button-remove';

  it('Verificar se o componente TopNotice esta com a notícia.', async () => {
    renderWithRouter(<App />, { route: '/' });
    const loading = await screen.findByAltText('loading');
    await waitFor(() => expect(loading).not.toBeInTheDocument());

    const image = screen.getByAltText('notice');
    const title = screen.getByText(/A luta do IBGE/i);
    const intro = screen.getByText(/A ministra Simone/i);

    expect(image).toHaveProperty('src', 'https://agenciadenoticias.ibge.gov.br/images/agenciadenoticias/ibge/2023_11/Tebet_Dialogos_THUMB.jpg');
    expect(title).toBeInTheDocument();
    expect(intro).toBeInTheDocument();
  });

  it('Favoritar a notícia no compoente TopNotice.', async () => {
    const { user } = renderWithRouter(<App />, { route: '/' });
    const loading = await screen.findByAltText('loading');
    await waitFor(() => expect(loading).not.toBeInTheDocument());

    expect(JSON.parse(localStorage.getItem('listFavorite') as string)).toHaveLength(0);

    const buttonAdd = screen.getAllByTestId('button-add');
    const notFavorite = screen.getAllByAltText('heart empty');

    expect(notFavorite[0]).toBeInTheDocument();

    await user.click(buttonAdd[0]);

    expect(JSON.parse(localStorage.getItem('listFavorite') as string)).toHaveLength(1);

    const buttonRemove = screen.getByTestId(buttonRemoveFavorite);
    const isFavorite = screen.getByAltText('heart full');

    expect(isFavorite).toBeInTheDocument();

    await user.click(buttonRemove);

    expect(JSON.parse(localStorage.getItem('listFavorite') as string)).toHaveLength(0);

    const newButtonAdd = screen.getAllByTestId(buttonFavorite);

    expect(newButtonAdd[0]).toBeInTheDocument();
  });

  it('Favoritar a notícia no compoente TopNotice.', async () => {
    const { user } = renderWithRouter(<App />, { route: '/' });
    const loading = await screen.findByAltText('loading');
    await waitFor(() => expect(loading).not.toBeInTheDocument());

    const button = screen.getAllByText('Leia a notícia aqui');

    // expect(button[0]).toHaveBeenLastCalledWith('http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/38394-a-luta-do-ibge-chega-a-quem-mais-precisa-a-dona-maria-e-seu-jose-diz-ministra-simone-tebet-em-mensagem-ao-1-encontro-dialogos-ibge-90-anos.html');
    await user.click(button[0]);
  });

  it('Checar a lista de Mais recentes.', async () => {
    renderWithRouter(<App />, { route: '/' });
    const loading = await screen.findByAltText('loading');
    await waitFor(() => expect(loading).not.toBeInTheDocument());

    const list = await screen.findAllByTestId(listElements);

    expect(list).toHaveLength(18);
  });

  it('Clicar no filtro de Mais recentes.', async () => {
    const { user } = renderWithRouter(<App />, { route: '/' });
    const loading = await screen.findByAltText('loading');
    await waitFor(() => expect(loading).not.toBeInTheDocument());

    const list1 = await screen.findAllByTestId(listElements);

    expect(list1).toHaveLength(18);

    const buttonRecent = screen.getByTestId('most-recent');

    await user.click(buttonRecent);

    const list2 = await screen.findAllByTestId(listElements);

    expect(list2).toHaveLength(37);
  });

  it('Checar a lista de Release.', async () => {
    const { user } = renderWithRouter(<App />, { route: '/' });
    const loading = await screen.findByAltText('loading');
    await waitFor(() => expect(loading).not.toBeInTheDocument());

    const release = screen.getByTestId(/release/i);

    await user.click(release);

    const list = await screen.findAllByTestId(listElements);
    expect(list).toHaveLength(18);
  });

  it('Checar a lista de Notícia.', async () => {
    const { user } = renderWithRouter(<App />, { route: '/' });
    const loading = await screen.findByAltText('loading');
    await waitFor(() => expect(loading).not.toBeInTheDocument());

    const notice = screen.getByTestId('notice');

    await user.click(notice);

    const list = await screen.findAllByTestId(listElements);
    expect(list).toHaveLength(18);
  });

  it('Buscar por palavra.', async () => {
    const { user } = renderWithRouter(<App />, { route: '/' });
    const loading = await screen.findByAltText('loading');
    await waitFor(() => expect(loading).not.toBeInTheDocument());

    const search = screen.getByTestId('search');
    await user.click(search);

    const input = screen.getByTestId('input');
    await user.type(input, 'ibge');

    const buttonSearch = screen.getByText(/buscar/i);
    await user.click(buttonSearch);

    const list = await screen.findAllByTestId(listElements);
    expect(list).toHaveLength(18);
  });

  it('Checar a lista de Favoritos.', async () => {
    const { user } = renderWithRouter(<App />, { route: '/' });
    const loading = await screen.findByAltText('loading');
    await waitFor(() => expect(loading).not.toBeInTheDocument());

    const notice = screen.getByTestId('favorite');

    await user.click(notice);

    const listEmpty = await screen.findByText(/lista vazia/i);

    expect(listEmpty).toBeInTheDocument();
  });

  it('Adicionar e remover na lista de Favoritos.', async () => {
    const { user } = renderWithRouter(<App />, { route: '/' });
    const loading = await screen.findByAltText('loading');
    await waitFor(() => expect(loading).not.toBeInTheDocument());

    const buttonAdd = screen.getAllByTestId(buttonFavorite);

    await user.click(buttonAdd[0]);
    await user.click(buttonAdd[3]);

    const notice = screen.getByTestId('favorite');

    await user.click(notice);

    const list1 = await screen.findAllByTestId(listElements);
    expect(list1).toHaveLength(2);

    const buttonRemove = screen.getAllByTestId(buttonRemoveFavorite);

    await user.click(buttonRemove[0]);

    const lis2 = await screen.findAllByTestId(listElements);
    expect(lis2).toHaveLength(1);

    const buttonRemove2 = screen.getAllByTestId(buttonRemoveFavorite);
    expect(buttonRemove2).toHaveLength(1);

    await user.click(buttonRemove[1]);
  });

  it('Adicionar a notícia no topo com lista de Favoritos selecionada.', async () => {
    const { user } = renderWithRouter(<App />, { route: '/' });
    const loading = await screen.findByAltText('loading');
    await waitFor(() => expect(loading).not.toBeInTheDocument());

    const notice = screen.getByTestId('favorite');
    await user.click(notice);

    const buttonAdd = screen.getAllByTestId(buttonFavorite);
    await user.click(buttonAdd[0]);

    const list = await screen.findAllByTestId(listElements);
    expect(list).toHaveLength(1);
  });

  it('Testar scroll infinito.', async () => {
    const { user } = renderWithRouter(<App />, { route: '/' });
    const loading = await screen.findByAltText('loading');
    await waitFor(() => expect(loading).not.toBeInTheDocument());

    const list1 = await screen.findAllByTestId(listElements);

    expect(list1).toHaveLength(18);

    // Object.defineProperty(window, 'scrollHeight', { value: 200000 });
    // window.addEventListener('scroll', () => { /* some callback */ });
    // mockAllIsIntersecting(true);
    // fireEvent.scroll(document, { target: { scrollY: 100000000000000 } });
    // window.dispatchEvent(new window.UIEvent('scroll'));
    /* window.scroll({
      top: 1000000,
      behavior: 'smooth',
    }); */
    // defaultFallbackInView(true);
    // const scroll = screen.getByTestId('scroll');
    // fireEvent.scroll(scroll);
    // const loading1 = await screen.findByAltText('loading');
    // await waitFor(() => expect(loading1).not.toBeInTheDocument());

    const list2 = await screen.findAllByTestId(listElements);
    expect(list2).toHaveLength(18);
  });
});
