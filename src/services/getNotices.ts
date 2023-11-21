const API = 'https://servicodados.ibge.gov.br/api/v3/noticias/?';

/* export const getFirstNotice = () => fetch(`${API}qtd=1`)
  .then((response) => response.json())
  .then((data) => data.items[0]);
*/
export const getNoticesAndReleases = (quantity: number) => fetch(`${API}qtd=${quantity}`)
  .then((response) => response.json())
  .then((data) => data.items);

export
const getNotices = () => fetch(`${API}tipo=noticia`)
  .then((response) => response.json())
  .then((data) => data.items);

export
const getReleases = () => fetch(`${API}tipo=release`)
  .then((response) => response.json())
  .then((data) => data.items);

export
const getSearch = (value: string) => fetch(`${API}busca=${value}`)
  .then((response) => response.json())
  .then((data) => data.items);
