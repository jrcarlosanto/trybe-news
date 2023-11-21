import { Link } from 'react-router-dom';
import { Main } from './styles';

function NotFound() {
  return (
    <Main>
      <h1>OOPS!</h1>
      <h2>Erro 404 Página não Encontrada</h2>
      <Link to="/">Voltar</Link>
    </Main>
  );
}

export default NotFound;
