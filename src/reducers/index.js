import { combineReducers } from 'redux';
import User from './user';
import Form from './form';
import Article from './article';

export default combineReducers({
  User,
  Form,
  Article,
});

