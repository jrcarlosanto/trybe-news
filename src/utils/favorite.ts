import { Notice } from '../types';

export const getIsFavorite = (id: string) => {
  const list = JSON.parse(localStorage.getItem('listFavorite') as string);
  return list.filter((favorite: Notice) => id === favorite.id).length > 0;
};

export const setIsFavorite = (notice: Notice) => {
  const list = JSON.parse(localStorage.getItem('listFavorite') as string);
  list.push(notice);
  localStorage.setItem('listFavorite', JSON.stringify(list));
};

export const removeIsFavorite = (id: string) => {
  const list = JSON.parse(localStorage.getItem('listFavorite') as string);
  localStorage.setItem('listFavorite', JSON.stringify(list
    .filter((favorite: Notice) => id !== favorite.id)));
};
