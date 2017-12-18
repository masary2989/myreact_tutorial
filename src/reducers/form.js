import { FORM_TITLE, FORM_ARTICLE } from '../actions/form';

const initialState = {
  Title: null,
  Article: null,
};

export default function Form(state = initialState, action) {
  switch (action.type) {
    case FORM_TITLE:
      return Object.assign({}, { Title: action.Title });
    case FORM_ARTICLE:
      alert(action.Article);
      return Object.assign({}, { Article: action.Article });
    default:
      return state;
  }
}

