import { useReducer } from 'react';
import './App.css';
import { GlobalState } from './contexts/AppContext/data';

// useReducer é usado para estados mais complexos que requerem alguma logica

// função de reducer. Recebe um estado e uma action e retorna um estado novo
let show = '';
const reducer = (state, action) => {
  switch (action.type) {
    case 'muda': {
      console.log('Chamou muda com ', action.payload);
      show = 'Chamou muda!';
      return { ...state, title: action.payload };
    }
    case 'inverter': {
      console.log('Chamou inverter');
      const { title } = state;
      show = 'Chamou inverter!';
      return { ...state, title: title.split('').reverse().join('') };
    }
    default: {
      console.log('Nenhuma ação encontrada!');
      show = 'Nenhuma ação encontrada!';
      return { ...GlobalState };
    }
  }
};

function App() {
  // useReducer = {primeiro = (função), segundo = (estado inicial)}
  // essa função do 'dispatch' serve para disparar ações
  const [state, dispatch] = useReducer(reducer, GlobalState);
  const { counter, title } = state;
  return (
    <div className="App-header">
      <h1>
        {title} {counter}
      </h1>
      {/* passar parametros para a função dispatch sempre um objeto. Esse objeto vai vir no 'action' */}
      <div className="container">
        <button
          onClick={() =>
            dispatch({
              type: 'muda',
              payload: new Date().toLocaleString('pt-BR'),
            })
          }
        >
          Click
        </button>
        <button onClick={() => dispatch({ type: 'inverter' })}>Inverter</button>
        <button onClick={() => dispatch({ type: '' })}>CHAMA</button>
      </div>
      <h2>{show}</h2>
    </div>
  );
}

export default App;
