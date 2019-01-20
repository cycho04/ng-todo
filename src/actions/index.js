import jsonPlaceHolder from '../apis/jsonPlaceHolder';


// common format es 2015 syntax. getState is not used so no need to add.
export const fetchPosts = () => async dispatch => {
        const response = await jsonPlaceHolder.get('/posts');
        dispatch({type: 'FETCH_POSTS', payload: response})
    };



//original format
//
// export const fetchPosts = () => {
//     return async function (dispatch, getState) {
//         const response = await jsonPlaceHolder.get('/posts');

//         dispatch({type: 'FETCH_POSTS', payload: response})
//     };
// };