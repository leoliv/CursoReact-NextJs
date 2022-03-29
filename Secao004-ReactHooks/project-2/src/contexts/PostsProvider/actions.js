import * as types from './types';

export const loadPosts = async (dispatch) => {
  dispatch({ type: types.POSTS_LOADING });
  const postsRaw = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await postsRaw.json();
  console.log('The posts have been loaded');
  return () => dispatch({ type: types.POSTS_SUCCESS, payload: posts });
};
