export const IMPORT_ARTICLE = 'IMPORT_ARTICLE';

function getArticleFromApiAsync() {
  return fetch('http://0.0.0.0:3000/articles/2')
    .then((response) => response.json())
    .then((responseJson) => {
      console.log(typeof(responseJson.article));
      return{
        Article: responseJson.article,
      };
    })
    .catch((error) => {
      console.error(error);
    });
}


export const fetchArticle = () => (
{
  type: IMPORT_ARTICLE,
  Article: console.log(getArticleFromApiAsync().Article),
}
)
