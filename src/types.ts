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
  newNotice: Notice;
};
