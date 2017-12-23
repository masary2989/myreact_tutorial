import { FORM_TITLE, FORM_ARTICLE, POST_ARTICLE } from '../actions/form';

const initialState = {
  Title: null,
  Article: null,
};

export default function Form(state = initialState, action) {
  switch (action.type) {
    case FORM_TITLE:
      return Object.assign({}, state, { Title: action.Title });
    case FORM_ARTICLE:
      return Object.assign({}, state, { Article: action.Article });
    case POST_ARTICLE:
      return state;
    default:
      return state;
  }
}

