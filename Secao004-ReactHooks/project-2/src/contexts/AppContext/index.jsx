import { createContext, useState } from 'react';
import { GlobalState } from './data';

export const GlobalContext = createContext();

export const AppContext = (props) => {
  const [contextState, setState] = useState(GlobalState);
  return (
    <GlobalContext.Provider value={{ contextState, setState }}>
      {props.children}
    </GlobalContext.Provider>
  );
};
