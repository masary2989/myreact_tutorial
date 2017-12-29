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

export const fetchArticle = (userArticleId) => (dispatch, getState) => {
  const userId = getState().User.UID;
  // const userArticleId = 1  //userArticleId
  fetch(`http://0.0.0.0:3000/articles/1?user_id=${userId}&user_article_id=${userArticleId}`)
    .then(response => response.json())
    .then((responseJson) => {
      console.log('response.article',responseJson)
      dispatch({
        type: IMPORT_ARTICLE,
        Article: responseJson.article,
      });
    })
    .catch((error) => {
      console.error(error);
    });
};


export const fetchTitle = (userArticleId) => (dispatch, getState) => {
  const userId = getState().User.UID;
  // const userArticleId = 1;  //userArticleId
  fetch(`http://0.0.0.0:3000/user_articles/${userArticleId}/viewarticle?user_id=${userId}`)
    .then(response => response.json())
    .then((responseJson) => {
      console.log('response.title',responseJson)
      dispatch({
        type: IMPORT_TITLE,
        Title: responseJson.title,
      });
    })
    .catch((error) => {
      console.error(error);
    });
};
