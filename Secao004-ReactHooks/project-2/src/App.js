import './App.css';
import { H1 } from './components/H1';
import { AppContext } from './contexts/AppContext';

function App() {
  return (
    <AppContext>
      <div className="App-header">
        <H1 />
      </div>
    </AppContext>
  );
}

export default App;
