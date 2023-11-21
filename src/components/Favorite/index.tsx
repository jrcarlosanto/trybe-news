import { useContext, useEffect, useState } from 'react';
import { Notice } from '../../types';
import { getIsFavorite, removeIsFavorite, setIsFavorite } from '../../utils/favorite';
import heartEmpty from '../../images/heart-empty.svg';
import heartFull from '../../images/heart-full.svg';
import { Button, Img } from './styles';
import NoticesContext from '../../context/NoticesContext';
import { FAVORITE } from '../../utils/constants';

function Favorite({ data_publicacao, id, imagens, introducao, titulo, type,
  link }: Notice) {
  const { setLoadingList, choiceList, youngestNotice,
    reloadYoungestNotice, setReloadYoungestNotice } = useContext(NoticesContext);
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
    if (choiceList === FAVORITE) {
      setLoadingList(true);
    }
  };

  const removeNotice = () => {
    removeIsFavorite(id);
    setFavorite(false);
    if (choiceList === FAVORITE) {
      setLoadingList(true);
    }
    if (id === youngestNotice.id) {
      setReloadYoungestNotice(!reloadYoungestNotice);
    }
  };

  useEffect(() => {
    setFavorite(getIsFavorite(id));
  }, [getIsFavorite(id)]);

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
