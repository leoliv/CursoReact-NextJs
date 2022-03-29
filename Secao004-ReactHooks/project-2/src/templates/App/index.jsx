import { Posts } from '../../components/Posts';
import { PostsProvider } from '../../contexts/PostsProvider';
import './styles.css';
function App() {
  return (
    <PostsProvider>
      <div className="App-header">
        <h1>1234</h1>
        <Posts />
      </div>
    </PostsProvider>
  );
}

export default App;
