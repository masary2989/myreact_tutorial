export const IMPORT_ARTICLE_LIST = 'IMPORT_ARTICLE_LIST';


export const fetchArticleLists = () => (dispatch, getState) => {
  const userId = getState().User.UID;
  fetch(`http://0.0.0.0:3000/user_articles/?user_id=${userId}`)
    .then(response => response.json())
    .then((responseJson) => {
      console.log('response.articlelists',responseJson)
      dispatch({
        type: IMPORT_ARTICLE_LIST,
        Array: responseJson,
      });
    })
    .catch((error) => {
      console.error(error);
    });
};
