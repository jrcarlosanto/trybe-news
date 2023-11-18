const API = 'https://servicodados.ibge.gov.br/api/v3/noticias/?';

export const getFirstNotice = () => fetch(`${API}qtd=1`)
  .then((response) => response.json())
  .then((data) => data.items[0]);

export const getNoticesAndReleases = (quantity: number) => fetch(`${API}qtd=${quantity}`)
  .then((response) => response.json())
  .then((data) => data.items.slice(1, data.items.length - 1));

export
const getNotices = (quantity: number) => fetch(`${API}qtd=${quantity}?tipo=noticia`)
  .then((response) => response.json())
  .then((data) => data.items.slice(1, data.items.length - 1));
