import { combineReducers } from 'redux';
import User from './user';
import Form from './form';
import Article from './article';
import ArticleLists from './article_lists';


const initialState = {
  hostname: 'localhost',
};

function Url(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default combineReducers({
  Url,
  User,
  Form,
  Article,
  ArticleLists,
});

