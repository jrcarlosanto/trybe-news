import { useContext } from 'react';
import NoticesContext from '../../context/NoticesContext';
import Button from '../ButtonRead';
import DateNotice from '../DateNotice';
import { Img, Intro, LastNoticeInfo, NoticeCard, Section } from './styles';
import Favorite from '../Favorite';

function TopNotice() {
  const { youngestNotice } = useContext(NoticesContext);
  const { imagens, titulo, introducao, link, data_publicacao, id, type } = youngestNotice;

  return (
    <Section>
      <Img src={ `https://agenciadenoticias.ibge.gov.br/${JSON.parse(imagens).image_intro}` } alt="notice" />
      <NoticeCard>
        <div>
          <LastNoticeInfo>Notícia mais recente</LastNoticeInfo>
          <Favorite
            data_publicacao={ data_publicacao }
            id={ id }
            imagens={ imagens }
            introducao={ introducao }
            titulo={ titulo }
            type={ type }
            link={ link }
          />
        </div>
        <h2>{ titulo }</h2>
        <Intro>{ introducao }</Intro>
        <div>
          <DateNotice data_publicacao={ data_publicacao } />
          <Button link={ link } text="Leia a notícia aqui" />
        </div>
      </NoticeCard>
    </Section>
  );
}

export default TopNotice;
