import './App.css';
import * as React from 'react';
import { useState, useEffect, useRef } from 'react';

const useMyHook = (cb, delay = 1000) => {
  const savedCb = useRef();

  useEffect(() => {
    savedCb.current = cb;
  }, [cb]);

  useEffect(() => {
    const interval = setInterval(() => {
      savedCb.current();
    }, delay);
    return () => clearInterval(interval);
  }, [delay]);
};

function App() {
  const [counter, setCounter] = useState(0);
  const [delay, setDelay] = useState(1000);
  const [incrementor, setIncrementor] = useState(100);

  useMyHook(() => setCounter((c) => c + 1), delay);

  return (
    <div className="App-header">
      <h1>Contador: {counter}</h1>
      <h2>Delay: {delay}</h2>
      <div className="container">
        <button onClick={() => setDelay((d) => d + incrementor)}>
          +{incrementor}
        </button>
        <button onClick={() => setDelay((d) => d - incrementor)}>
          -{incrementor}
        </button>
        <input
          type="number"
          value={incrementor}
          onChange={(e) => setIncrementor(Number(e.target.value))}
        />
      </div>
    </div>
  );
}

export default App;
