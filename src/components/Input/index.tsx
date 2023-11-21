import { useContext } from 'react';
import NoticesContext from '../../context/NoticesContext';
import { InputStyle } from './styles';

function Input() {
  const { search, setSearch } = useContext(NoticesContext);

  const change = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearch(value);
  };

  return (<InputStyle
    value={ search }
    type="text"
    onChange={ change }
    data-testid="input"
  />);
}

export default Input;
