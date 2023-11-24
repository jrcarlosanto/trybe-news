export type Notice = {
  data_publicacao: string;
  id: string;
  imagens: string;
  introducao: string;
  titulo: string;
  type: string;
  link: string;
};

export type NoticesContextType = {
  listNotice: Notice[];
  loading: boolean;
  youngestNotice: Notice;
  setLoadingList: (value: boolean) => void;
  loadingList: boolean;
  setChoiceList: (value: string) => void;
  choiceList: string;
  quantity: number;
  setQuantity: (value: number) => void;
  search: string;
  setSearch: (value: string) => void;
  setReloadYoungestNotice: (value: boolean) => void;
  reloadYoungestNotice: boolean;
};
