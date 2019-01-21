import jsonPlaceHolder from '../apis/jsonPlaceHolder';


export const fetchPostsAndUsers = () => async (dispatch, getState) => {
    console.log('fetching..')
    await dispatch(fetchPosts());
    console.log('fetched');
}

//fetchPosts
// common format. es 2015 syntax. getState is not used so no need to add.
export const fetchPosts = () => async dispatch => {
        const response = await jsonPlaceHolder.get('/posts');
        dispatch({type: 'FETCH_POSTS', payload: response.data })
    };

//original format
//
// export const fetchPosts = () => {
//     return async function (dispatch, getState) {
//         const response = await jsonPlaceHolder.get('/posts');

//         dispatch({type: 'FETCH_POSTS', payload: response})
//     };
// };




//fetchUser
export const fetchUser = (id) => async dispatch => {
    const response = await jsonPlaceHolder.get(`/users/${id}`);
    dispatch({type: 'FETCH_USER', payload: response.data})
};