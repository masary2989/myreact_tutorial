//async no source desu

/*
export const IMPORT_ARTICLE = 'IMPORT_ARTICLE';

async function getArticleFromApiAsync() {
  try{
    let response = await fetch('http://0.0.0.0:3000/articles/2');
    let responseJson = await response.json();
    console.log(typeof(responseJson.article));
    return await responseJson.article;
  } catch (error) {
    console.error(error);
  }
}


export const fetchArticle = () => (
{
  type: IMPORT_ARTICLE,
  Article: console.log('export',getArticleFromApiAsync()),
}
)

*/


export const IMPORT_ARTICLE = 'IMPORT_ARTICLE';
export const IMPORT_TITLE = 'IMPORT_TITLE';

export const fetchArticle = () => (dispatch, getState) => {
  const userArticleId = getState().User.UID;
  fetch(`http://0.0.0.0:3000/articles/${userArticleId}`)
    .then(response => response.json())
    .then((responseJson) => {
      //console.log('=-=-=-=-=-');
      // console.log(typeof (responseJson.article));
      dispatch({
        type: IMPORT_ARTICLE,
        Article: responseJson.article,
      });
    })
    .catch((error) => {
      console.error(error);
    });
};


export const fetchTitle = () => (dispatch, getState) => {
  const userArticleId = getState().User.UID;
  fetch(`http://0.0.0.0:3000/user_articles/${userArticleId}`)
    .then(response => response.json())
    .then((responseJson) => {
      console.log('response.title',responseJson)
      //console.log('=-=-=-=-=-');
      // console.log(typeof (responseJson.article));
      dispatch({
        type: IMPORT_TITLE,
        Title: responseJson.title,
      });
    })
    .catch((error) => {
      console.error(error);
    });
};
