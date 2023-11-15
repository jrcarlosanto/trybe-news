import { screen } from '@testing-library/react';
import App from '../App';
import { renderWithRouter } from '../utils/renderWithRouter';

describe('<Header />', () => {
  it('Verificar se o header tem a imagem e o título.', () => {
    renderWithRouter(<App />, { route: '/' });

    const img = screen.getByAltText('logo');
    const title = screen.getByText('TRIBE NEWS');

    expect(img).toBeInTheDocument();
    expect(title).toBeInTheDocument();
  });
});
