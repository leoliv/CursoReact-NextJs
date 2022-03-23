import P from 'prop-types';
import './App.css';
import { createContext, useContext, useState } from 'react';

// O estado globall pode ser usado por qualquer parente da família do component

const GlobalState = {
  title: 'O titulo de contexto',
  body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,',
  counter: 0,
};

const GlobalContext = createContext();

const CompOne = () => {
  return (
    <>
      <CompTwo />
      <CompThree />
    </>
  );
};

const CompTwo = () => {
  const theContext = useContext(GlobalContext);
  const {
    contextState: { title, counter },
  } = theContext;
  return (
    <h1>
      {title} {counter}
    </h1>
  );
};

const CompThree = () => {
  const theContext = useContext(GlobalContext);
  const {
    contextState: { body, counter },
    contextState,
    setContextState,
  } = theContext;
  return (
    <p
      onClick={() => setContextState((s) => ({ ...s, counter: s.counter + 1 }))}
    >
      {body}
    </p>
  );
};

function App() {
  const [contextState, setContextState] = useState(GlobalState);

  return (
    <GlobalContext.Provider value={{ contextState, setContextState }}>
      <CompOne />
    </GlobalContext.Provider>
  );
}

export default App;
