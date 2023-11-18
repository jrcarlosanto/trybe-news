import moment from 'moment';

export const diffDays = (data_publicacao: string) => {
  const d2 = new Date();

  const diff = moment(d2, 'DD/MM/YYYY HH:mm:ss')
    .diff(moment(data_publicacao, 'DD/MM/YYYY HH:mm:ss'));
  const days = moment.duration(diff).asDays();
  let text = '';

  if (days < 1) {
    text = 'Hoje';
  } else if (days < 2) {
    text = '1 dia atrás';
  } else {
    text = `${Math.floor(days)} dias atrás`;
  }
  return text;
};
