import { IMPORT_ARTICLE_LIST } from '../actions/article_list';

const initialState = {
  Array: [{id:'I write about my dinner too.'}],

};

export default function ArticleLists(state = initialState, action) {
  switch (action.type) {
    case IMPORT_ARTICLE_LIST:
      return Object.assign({}, state, { Array: action.Array });
    default:
      return state;
  }
}

