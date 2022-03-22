import P from 'prop-types';
import './App.css';
import React, { useState, useCallback, useMemo } from 'react';

const Button = ({ incrementButton }) => {
  console.log('Filho, redenrizou');
  return <button onClick={() => incrementButton(100)}>+</button>;
};

Button.propTypes = {
  incrementButton: P.func,
};

function App() {
  const [counter, setCounter] = useState(0);

  const incrementCounter = useCallback((num) => {
    setCounter((c) => c + num);
  }, []);

  console.log('Pai, redenrizou');

  const btn = useMemo(() => {
    return <Button incrementButton={incrementCounter} />;
  }, [incrementCounter]); // tudo o que for externo, vai ser usado como array de dependencia.

  return (
    <div className="App">
      <p>Texto 2</p>
      <h1>C1: {counter}</h1>
      <div className="container">{btn}</div>
    </div>
  );
}

export default App;
