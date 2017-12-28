import { combineReducers } from 'redux';
import User from './user';
import Form from './form';
import Article from './article';
import ArticleLists from './article_lists';

export default combineReducers({
  User,
  Form,
  Article,
  ArticleLists,
});

