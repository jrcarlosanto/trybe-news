import moment from 'moment';
import { P } from './styles';
import { diffDays } from '../../utils/diffDays';

type DateNoticeType = {
  data_publicacao: string;
};

function DateNotice({ data_publicacao }: DateNoticeType) {
  const text = diffDays(data_publicacao);
  return (
    <P>{text}</P>
  );
}

export default DateNotice;
