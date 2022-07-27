import _ from 'lodash'
import jsonPlaceholder from '../apis/jsonPlaceholder';

// redux thunk receives two store methods as below
export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  console.log('before fetching posts!')
  await dispatch(fetchPosts());
  // await dispatch(fetchUser());
  console.log('fetched posts!')
  console.log(getState())
  console.log(getState().posts);

  // const userIds = _.uniq(_.map(getState().posts, 'userId'))
  // console.log(userIds)
  // userIds.forEach(id => dispatch(fetchUser(id)))

  // await Promise.all(userIds.map(id => dispatch(fetchUser(id))))

  await Promise.all(_.chain(getState().posts)
    .map('userId')
    .uniq()
    .map(id => dispatch(fetchUser(id)))
    .value()
  );
  // await dispatch(fetchUser())
  // await sleep(50000)
  console.log(getState())
}

export const fetchPosts = () => async dispatch => {
  const response = await jsonPlaceholder.get('/posts');

  dispatch({ type: 'FETCH_POSTS', payload: response.data });
};

// export const fetchUser = _.memoize(function (userId) {
//   return _.memoize(async function(dispatch) {
//     const response = await jsonPlaceholder.get(`/users/${userId}`);
//     dispatch({ type: 'FETCH_USER', payload: response.data})
//   })
// })

export const fetchUser = (userId) => async dispatch => {
  const response = await jsonPlaceholder.get(`/users/${userId}`);
  dispatch({ type: 'FETCH_USER', payload: response.data})
}

// export const fetchUser = (userId) => dispatch => {
//   _fetchUser(userId, dispatch)
// }

// const _fetchUser = _.memoize(async (userId, dispatch) => {
//   const response = await jsonPlaceholder.get(`/users/${userId}`);
//   dispatch({ type: 'FETCH_USER', payload: response.data})
// });