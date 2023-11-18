import loadingIcon from '../../images/Spinner.svg';
import { Div } from './styles';

type LoadingType = {
  styledHeight?: React.CSSProperties;
};

function Loading({ styledHeight = { height: '100vh' } }: LoadingType) {
  return (
    <Div style={ styledHeight }>
      <img src={ loadingIcon } alt="loading" />
    </Div>
  );
}

export default Loading;
