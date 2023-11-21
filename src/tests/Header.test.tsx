import { screen, waitFor } from '@testing-library/react';
import { vi } from 'vitest';
import { mockAllIsIntersecting } from 'react-intersection-observer/test-utils';
import App from '../App';
import { renderWithRouter } from '../utils/renderWithRouter';
import * as getNotices from '../services/getNotices';
import * as getDay from '../utils/diffDays';
import { noticesAndReleases } from './mocks/noticesAndReleases';

describe('<Header />', () => {
  it('Verificar se o header tem a imagem e o título.', async () => {
    const mockInitial = vi.spyOn(getNotices, 'getNoticesAndReleases');
    mockInitial.mockImplementation(() => Promise.resolve(noticesAndReleases));
    vi.spyOn(getDay, 'diffDays').mockReturnValue('Hoje');
    /* window.IntersectionObserver = vi.fn().mockImplementation(() => ({
      observe: () => null,
    })); */
    mockAllIsIntersecting(true);

    renderWithRouter(<App />, { route: '/' });
    const loading = await screen.findByAltText('loading');
    await waitFor(() => expect(loading).not.toBeInTheDocument());

    const img = await screen.findByAltText('logo');
    const title = await screen.findByText('TRIBE NEWS');

    expect(img).toBeInTheDocument();
    expect(title).toBeInTheDocument();
  });
});
