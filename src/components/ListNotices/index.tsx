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
  // const loaderRef = useRef(null);
  const options = {};
  const [ref, inView] = useInView(options);
  // const [isVisible, setIsVisible] = useState(false);

  const listFavorite = (JSON.parse(localStorage
    .getItem('listFavorite') as string));

  /*  const handleObserver = (entities: any[]) => {
    const target = entities[0];
    if (target.isIntersecting
      && (quantity <= listFavorite.length || choiceList !== FAVORITE)) {
      setQuantity(quantity + SEARCHE_SUM_QUANTITY);
      setLoadingList(true);
    }
  };

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };
    const observer = new IntersectionObserver(handleObserver, options);
    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }
    console.log(observer);
  }, [scroll]);
*/
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
        {(listFavorite.length === 0 && choiceList === FAVORITE) && <H2>Lista Vazia</H2>}
        {/* <p ref={ loaderRef } /> */}
        <p ref={ ref } data-testid="scroll" />
      </Section>
      {(loadingList && quantity > SEARCHE_SUM_QUANTITY) && (
        <Loading styledHeight={ { height: '100px' } } />)}
    </>
  );
}

export default ListNotice;
