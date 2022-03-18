import './App.css';
import { useState, useEffect } from 'react';

// Por algum motivo vc queira colocar um componentDidUpdate (toda vez que for atualizado o componente, chamar uma função). Para isso pode utiliar o hook chamado 'useEffect'. Esse useEffect sozinho faz o trabalho do componentDidMount, componentDidUpdate e componentWillUnmount

const eventFn = () => {
  console.log('H1 Clicado!');
};

function App() {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);

  // ComponentDidUpdate => executa toda vez que o component atualiza
  // useEffect(() => {
  //   console.log('componentDidUpdate');
  // });

  // componentDidMount => executa uma vez
  useEffect(() => {
    // console.log('componentDidMount');
    document.querySelector('h1')?.addEventListener('click', eventFn);
    // para remover = componentWillUnmount, apenas retornar uma função.
    return () => {
      document.querySelector('h1')?.removeEventListener('click', eventFn);
    };
  }, []); // se passar o array vazio ele vai executar apenas uma vez.

  // Com dependencia => executa toda vez que a dependencia mudar
  useEffect(() => {
    console.log('C1: ', counter, 'C2: ', counter2);
    // setCounter(counter + 1); // loopInfinit
    // setCounter(10); // vai sempre setar 10 quando atualizar o component
  }, [counter, counter2]); // toda vez que for usada uma variável dentro do corpo, tem que colocar como dependencia.

  return (
    <div className="App">
      <p>Texto 2</p>
      <h1>
        C1: {counter} C2: {counter2}
      </h1>
      <div className="container">
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={() => setCounter2(counter2 + 1)}>+ (2)</button>
      </div>
    </div>
  );
}

export default App;
