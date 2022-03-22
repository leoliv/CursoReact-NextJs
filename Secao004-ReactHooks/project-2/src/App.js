import P from 'prop-types';
import './App.css';
import React, { useState, useCallback } from 'react';

// React.memo faz a mesma coisa que o useCallback, porem ele salva valores. Nesse caso especificamente está salvando um component inteiro. Mas existe um hook para ele chamado 'useMemo'
const Button = React.memo(({ incrementButton }) => {
  console.log('Filho, redenrizou');
  return <button onClick={() => incrementButton(10)}>+</button>;
});

Button.propTypes = {
  incrementButton: P.func,
};

function App() {
  const [counter, setCounter] = useState(0);

  // useCallback é usado para fazer o cache de function que não mudam
  // vai ser salvo na memoria - em cache
  const incrementCounter = useCallback((num) => {
    setCounter((c) => c + num);
  }, []); // como não tem dependencia, não vai redenrizar. (vai executar apenas 1 vez)

  console.log('Pai, redenrizou');

  return (
    <div className="App">
      <p>Texto 2</p>
      <h1>C1: {counter}</h1>
      <div className="container">
        <Button incrementButton={incrementCounter} />
      </div>
    </div>
  );
}

export default App;
