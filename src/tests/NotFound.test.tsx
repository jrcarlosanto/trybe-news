import { screen } from '@testing-library/react';
import App from '../App';
import { renderWithRouter } from '../utils/renderWithRouter';

describe('<NotFound />', () => {
  it('Verificar se a pagina carrega corretamente.', async () => {
    const { user } = renderWithRouter(<App />, { route: '/assaas' });

    const title = screen.getByText('OOPS!');
    const erro = screen.getByText('Erro 404 Página não Encontrada');
    const link = screen.getByText('Voltar');

    expect(title).toBeInTheDocument();
    expect(erro).toBeInTheDocument();
    expect(link).toBeInTheDocument();

    await user.click(link);

    expect(window.location.pathname).toBe('/');
  });
});
