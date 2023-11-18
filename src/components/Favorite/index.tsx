import { useState } from 'react';
import { Notice } from '../../types';
import { getIsFavorite, removeIsFavorite, setIsFavorite } from '../../utils/favorite';
import heartEmpty from '../../images/heart-empty.svg';
import heartFull from '../../images/heart-full.svg';
import { Button, Img } from './styles';

function Favorite({ data_publicacao, id, imagens, introducao, titulo, type,
  link }: Notice) {
  const [favorite, setFavorite] = useState(getIsFavorite(id));

  const favoriteNotice = () => {
    setIsFavorite({ data_publicacao,
      id,
      imagens,
      introducao,
      titulo,
      type,
      link });
    setFavorite(true);
  };

  const removeNotice = () => {
    removeIsFavorite(id);
    setFavorite(false);
  };

  return (
    <div>
      { favorite
        ? (
          <Button
            onClick={ removeNotice }
            data-testid="button-remove"
          >
            <Img src={ heartFull } alt="heart full" />
          </Button>
        )
        : (
          <Button
            onClick={ favoriteNotice }
            data-testid="button-add"
          >
            <Img src={ heartEmpty } alt="heart empty" />
          </Button>
        ) }
    </div>
  );
}

export default Favorite;
