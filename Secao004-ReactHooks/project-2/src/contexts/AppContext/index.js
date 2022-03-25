import P from 'prop-types';
import { createContext, useReducer } from 'react';
import { actions } from './actions';
import { GlobalState } from './data';
import { reducer } from './reducer';

export const Context = createContext();

export const AppContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, GlobalState);

  const changeTitle = (payload) => {
    dispatch({ type: actions.CHANGE_TITLE, payload });
  };

  return (
    <Context.Provider value={{ state, changeTitle }}>
      {children}
    </Context.Provider>
  );
};

AppContext.propTypes = {
  children: P.node,
};
