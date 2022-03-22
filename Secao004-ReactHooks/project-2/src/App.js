import P from 'prop-types';
import './App.css';
import { useEffect, useState, useMemo, useRef } from 'react';

// useRef => pegar uma referencia para alguma coisa no documento ou para algum valor se quiser

const Post = ({ post, handleClick }) => {
  return (
    <div key={post.id} className="post">
      <h1
        style={{
          fontSize: '15px',
        }}
        onClick={() => handleClick(post.title)}
      >
        {post.title}
      </h1>
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
  handleClick: P.func,
};

function App() {
  const [posts, setPosts] = useState([]);
  const [value, setValue] = useState('');
  const input = useRef(null);
  const contador = useRef(0);
  console.log('Pai, redenrizou!');

  // componentDidMount
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((r) => r.json())
      .then((r) => setPosts(r));
  }, []);
  const handleClick = (value) => {
    setValue(value);
  };

  useEffect(() => {
    input.current.focus();
    console.log(input.current);
  }, [value]);

  useEffect(() => {
    contador.current++;
  });
  return (
    <div className="App">
      <h1>Rendenrizou: {contador.current}X</h1>
      <p>
        <input
          ref={input}
          type="search"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </p>
      {useMemo(() => {
        return (
          posts.length > 0 &&
          posts.map((post) => (
            <Post key={post.id} post={post} handleClick={handleClick} />
          ))
        );
      }, [posts])}
      {posts.length <= 0 && <p>Ainda n existem posts</p>}
    </div>
  );
}
// useMemo vc pode momoizar um component em si para ser memoizado. Agora useCallback é para vc realmente momoizar uma function de callback

export default App;
