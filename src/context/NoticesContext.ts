import { createContext } from 'react';
import { NoticesContextType } from '../types';

const NoticesContext = createContext({} as NoticesContextType);

export default NoticesContext;
