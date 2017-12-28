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



export const postTitle = () => (dispatch, getState) => {
  const userId = getState().User.UID;
  fetch(`http://0.0.0.0:3000/user_articles?user_id=${userId}`,{
    method: 'POST',
    body: JSON.stringify({ user_article: { title: getState().Form.Title, user_id: userId }}),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  }).then(response => response.json())
    .then((responseJson) => {
    })
    .catch((error) => {
      console.error(error);
    });
};

export const postArticle = () => (dispatch, getState) => {
  const userId = getState().User.UID;
  fetch(`http://0.0.0.0:3000/user_articles/1?user_id=${userId}`)
    .then(response => response.json())
    .then((responseJson) => {
      const userArticleId = responseJson.id;
      // const userArticleId = 1;
      // });
      fetch(`http://0.0.0.0:3000/articles?user_id=${userId}`,{
        method: 'POST',
        body: JSON.stringify(
          { article: { article: getState().Form.Article, user_article_id: userArticleId }}),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
      }).then(response => response.json())
        .then((responseJson) => {
        })
        .catch((error) => {
        console.error(error);
        });
    });
}
