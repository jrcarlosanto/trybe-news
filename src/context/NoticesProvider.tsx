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
  const [scroll, setScroll] = useState(false);
  const [reloadYoungestNotice, setReloadYoungestNotice] = useState(false);

  useEffect(() => {
    getNoticesAndReleases(quantity)
      .then((response) => {
        setYoungestNotice(response[0]);
        setLoading(false);
        setListNotice(response.slice(1, quantity));
        /* const firstNotice = localStorage.getItem('firstNotice');
        if (!firstNotice || JSON.parse(firstNotice).id !== response[0].id) {
          getNotices()
            .then((responseNotices) => localStorage
              .setItem('listNotices', JSON.stringify(responseNotices.slice(1, 600))));
          getReleases()
            .then((responseReleases) => localStorage
              .setItem('listReleases', JSON.stringify(responseReleases.slice(1, 600))));
        } */
        // localStorage.setItem('youngestNotice', JSON.stringify({ id: response[0].id }));
      });
  }, []);

  useEffect(() => {
    if (loadingList) {
      switch (choiceList) {
        case MOST_RECENT: getNoticesAndReleases(quantity)
          .then((response) => setListNotice(response.slice(1, quantity)));
          break;
        case RELEASE: /* setListNotice((JSON.parse(localStorage
          .getItem('listReleases') as string).slice(0, quantity - 1))); */
          getReleases().then((response) => setListNotice(response
            .slice(0, quantity - 1)));
          break;
        case NOTICE:/* setListNotice((JSON.parse(localStorage
          .getItem('listNotices') as string).slice(0, quantity - 1))); */
          getNotices().then((response) => setListNotice(response.slice(0, quantity - 1)));
          break;
        case FAVORITE: setListNotice((JSON.parse(localStorage
          .getItem('listFavorite') as string).slice(0, quantity - 1)));
          break;
        default: getSearch(search)
          .then((response) => setListNotice(response.slice(0, quantity - 1)));
      }
      setLoadingList(false);
      setScroll(!scroll);
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
        scroll,
        reloadYoungestNotice,
        setReloadYoungestNotice,
      } }
    >
      {children}
    </NoticesContext.Provider>
  );
}
