export const FORM_TITLE = 'TITLE_';
export const FORM_ARTICLE = 'FORM_ARTICLE';

export const inputTitle = Title => ({
  type: FORM_TITLE,
  Title,
});

export const inputArticle = Article => ({
  type: FORM_ARTICLE,
  Article,
});
