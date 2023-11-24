import { useContext, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import NoticesContext from '../../context/NoticesContext';
import Loading from '../Loading';
import CardNotice from '../CardNotice';
import { H2, Section } from './styles';
import { FAVORITE, SEARCHE_SUM_QUANTITY } from '../../utils/constants';

function ListNotice() {
  const { listNotice, loadingList, setQuantity, quantity,
    setLoadingList, choiceList } = useContext(NoticesContext);
  const options = {};
  const [ref, inView] = useInView(options);
  const listFavorite = (JSON.parse(localStorage
    .getItem('listFavorite') as string));

  useEffect(() => {
    if (inView && (quantity <= listFavorite.length || choiceList !== FAVORITE)) {
      setQuantity(quantity + SEARCHE_SUM_QUANTITY);
      setLoadingList(true);
    }
  }, [inView]);

  if (loadingList && quantity <= SEARCHE_SUM_QUANTITY) {
    return (<Loading />);
  }

  return (
    <>
      <Section>
        { listNotice.map(({ imagens, titulo, introducao,
          link, data_publicacao, id, type }) => (
            <CardNotice
              key={ id }
              data_publicacao={ data_publicacao }
              id={ id }
              imagens={ imagens }
              introducao={ introducao }
              titulo={ titulo }
              type={ type }
              link={ link }
            />)) }
        {listNotice.length === 0 && <H2>Lista Vazia</H2>}
        <p ref={ ref } data-testid="scroll" />
      </Section>
      {(loadingList && quantity >= SEARCHE_SUM_QUANTITY) && (
        <Loading styledHeight={ { height: '10px' } } />)}
    </>
  );
}

export default ListNotice;
