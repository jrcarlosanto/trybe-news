import { screen, waitFor } from '@testing-library/react';
import { vi } from 'vitest';
import App from '../App';
import { renderWithRouter } from '../utils/renderWithRouter';
import * as getNotices from '../services/getNotices';
import * as getDay from '../utils/diffDays';
import { topNotice } from './mocks/topNotice';

describe('<Header />', () => {
  it('Verificar se o header tem a imagem e o título.', async () => {
    const mockInitial = vi.spyOn(getNotices, 'getFirstNotice');
    mockInitial.mockImplementation(() => Promise.resolve(topNotice));
    vi.spyOn(getDay, 'diffDays').mockReturnValue('Hoje');

    renderWithRouter(<App />, { route: '/' });
    const loading = await screen.findByAltText('loading');
    await waitFor(() => expect(loading).not.toBeInTheDocument());

    const img = screen.getByAltText('logo');
    const title = screen.getByText('TRIBE NEWS');

    expect(img).toBeInTheDocument();
    expect(title).toBeInTheDocument();
  });
});
