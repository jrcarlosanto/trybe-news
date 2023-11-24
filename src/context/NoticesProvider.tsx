import { useEffect, useState } from 'react';
import NoticesContext from './NoticesContext';
import { Notice } from '../types';
import { getNotices, getNoticesAndReleases, getReleases,
  getSearch } from '../services/getNotices';
import { FAVORITE, MOST_RECENT, NOTICE, RELEASE,
  SEARCHE_SUM_QUANTITY } from '../utils/constants';

type PlanetsProviderType = {
  children: React.ReactNode;
};

export default function PlanetsProvider({ children }: PlanetsProviderType) {
  const [choiceList, setChoiceList] = useState('Mais recentes');
  const [listNotice, setListNotice] = useState<Notice[]>([
    { data_publicacao: '',
      id: '',
      imagens: '',
      introducao: '',
      titulo: '',
      type: '',
      link: '',
    },
  ]);
  const [youngestNotice, setYoungestNotice] = useState<Notice>(
    {
      data_publicacao: '',
      id: '',
      imagens: '',
      introducao: '',
      titulo: '',
      type: '',
      link: '',
    },
  );
  const [quantity, setQuantity] = useState(SEARCHE_SUM_QUANTITY);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [loadingList, setLoadingList] = useState(false);
  const [reloadYoungestNotice, setReloadYoungestNotice] = useState(false);

  useEffect(() => {
    getNoticesAndReleases(quantity)
      .then((response) => {
        setYoungestNotice(response[0]);
        setLoading(false);
        setListNotice(response.slice(1, quantity));
      });
  }, []);

  useEffect(() => {
    if (loadingList) {
      switch (choiceList) {
        case MOST_RECENT: getNoticesAndReleases(quantity)
          .then((response) => setListNotice(response.slice(1, quantity)));
          break;
        case RELEASE: getReleases()
          .then((response) => setListNotice(response
            .slice(0, quantity - 1)));
          break;
        case NOTICE: getNotices()
          .then((response) => setListNotice(response.slice(0, quantity - 1)));
          break;
        case FAVORITE: setListNotice((JSON.parse(localStorage
          .getItem('listFavorite') as string).slice(0, quantity - 1)));
          break;
        default: getSearch(search)
          .then((response) => setListNotice(response.slice(0, quantity - 1)));
      }
      setLoadingList(false);
    }
  }, [choiceList, quantity, loadingList]);

  if (!localStorage.getItem('listFavorite')) {
    localStorage.setItem('listFavorite', JSON.stringify([]));
  }

  return (
    <NoticesContext.Provider
      value={ { listNotice,
        loading,
        youngestNotice,
        setLoadingList,
        setChoiceList,
        quantity,
        setQuantity,
        choiceList,
        loadingList,
        search,
        setSearch,
        reloadYoungestNotice,
        setReloadYoungestNotice,
      } }
    >
      {children}
    </NoticesContext.Provider>
  );
}
