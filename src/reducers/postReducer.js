export default (state = [], action) => {
  // return 123;
  // return [];

  // // bad!
  // return document.querySelector('input')

  // // bad
  // return axios.get('/posts')

  // good
  // return state + action;

  // if (action.type === 'FETCH_POSTS') {
  //   return action.payload;
  // }

  // return state;

  switch (action.type) {
    case 'FETCH_POSTS':
      return action.payload;
    default:
      return state;
  }
};

