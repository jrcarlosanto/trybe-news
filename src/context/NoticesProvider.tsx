import { useEffect, useState } from 'react';
import NoticesContext from './NoticesContext';
import { Notice } from '../types';
import { getFirstNotice } from '../services/getNotices';

type PlanetsProviderType = {
  children: React.ReactNode;
};

export default function PlanetsProvider({ children }: PlanetsProviderType) {
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
  const [newNotice, setNewNotice] = useState<Notice>(
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
  const [quantity, setQuantity] = useState(11);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getFirstNotice()
      .then((response) => {
        setNewNotice(response);
        setLoading(false);
      });
  }, []);

  if (!localStorage.getItem('listFavorite')) {
    localStorage.setItem('listFavorite', JSON.stringify([]));
  }

  return (
    <NoticesContext.Provider
      value={ { listNotice, loading, newNotice } }
    >
      {children}
    </NoticesContext.Provider>
  );
}
