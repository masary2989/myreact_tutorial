import { IMPORT_TITLE, IMPORT_ARTICLE } from '../actions/article';

const initialState = {
  Title: 'I write about my dinner too.',
  Article: 'My first article',
};

export default function Article(state = initialState, action) {
  switch (action.type) {
    case IMPORT_ARTICLE:
      return Object.assign({}, state, { Article: action.Article });
    case IMPORT_TITLE:
      return Object.assign({}, state, { Title: action.Title });
    default:
      return state;
  }
}

