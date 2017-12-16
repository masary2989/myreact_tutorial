import { FORM_ARTICLE } from '../actions/form';

const initialState = {
  Title: null,
  Article: null,
};

export default function Form(state = initialState, action) {
  switch (action.type) {
    case FORM_ARTICLE:
      return Object.assign({}, { Title: action.Form, Article: action.Article });
    default:
      return state;
  }
}

