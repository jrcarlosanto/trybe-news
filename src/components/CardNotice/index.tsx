import { Notice } from '../../types';
import Button from '../ButtonRead';
import DateNotice from '../DateNotice';
import Favorite from '../Favorite';
import { Card, DivDateButton, DivFavorite, P } from './styles';

function CardNotice({ data_publicacao, id, imagens, introducao, titulo, type,
  link }: Notice) {
  return (
    <Card data-testid="element-list">
      <h3>{ titulo }</h3>
      <P>{ introducao }</P>
      <DivDateButton>
        <DateNotice data_publicacao={ data_publicacao } />
        <Button link={ link } text="Leia a notícia aqui" />
      </DivDateButton>
      <hr />
      <DivFavorite>
        <Favorite
          data_publicacao={ data_publicacao }
          id={ id }
          imagens={ imagens }
          introducao={ introducao }
          titulo={ titulo }
          type={ type }
          link={ link }
        />
      </DivFavorite>
    </Card>
  );
}

export default CardNotice;
