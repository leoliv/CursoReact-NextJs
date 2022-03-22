import P from 'prop-types';
import './App.css';
import { useEffect, useState, useMemo } from 'react';

const Post = ({ post }) => {
  return (
    <div key={post.id} className="post">
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
};

Post.propTypes = {
  post: P.shape({
    id: P.number,
    title: P.string,
    body: P.string,
  }),
};

function App() {
  const [posts, setPosts] = useState([]);
  const [value, setValue] = useState('');
  console.log('Pai, redenrizou!');

  // componentDidMount
  useEffect(() => {
    setTimeout(function () {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then((r) => r.json())
        .then((r) => setPosts(r));
    }, 5000);
  }, []);
  return (
    <div className="App">
      <p>
        <input
          type="search"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </p>
      {useMemo(() => {
        return (
          posts.length > 0 &&
          posts.map((post) => <Post key={post.id} post={post} />)
        );
      }, [posts])}
      {posts.length <= 0 && <p>Ainda n existem posts</p>}
    </div>
  );
}
// useMemo vc pode momoizar um component em si para ser memoizado. Agora useCallback é para vc realmente momoizar uma function de callback

export default App;
