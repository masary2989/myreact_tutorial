export const FORM_TITLE = 'FORM_TITLE';
export const FORM_ARTICLE = 'FORM_ARTICLE';
export const POST_ARTICLE = 'POST_ARTICLE';

export const inputTitle = Title => ({
  type: FORM_TITLE,
  Title,
});

export const inputArticle = Article => ({
  type: FORM_ARTICLE,
  Article,
});




export const postArticle = () => (dispatch, getState) => {
  const userArticleId = getState().User.UID;
  fetch(`http://0.0.0.0:3000/articles`,{
    method: 'POST',
    body: JSON.stringify({ article: { article: getState().Form.Article, user_article_id: userArticleId }}),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  }).then(response => response.json())
    .then((responseJson) => {
      /*dispatch({
        type: POST_ARTICLE,
        Article: responseJson.article,
      });*/
    })
    .catch((error) => {
      console.error(error);
    });
};
