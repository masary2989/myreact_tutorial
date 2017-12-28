import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { FormLabel, FormInput } from 'react-native-elements';

import AppReducer from '../../src/reducers';
import store from '../../src/store';
import { fetchTitle, fetchArticle } from '../../src/actions/article';

class ViewArticle extends React.Component {
  constructor(props) {
    super(props);
    store.dispatch(fetchArticle(this.props.userArticleId));
    store.dispatch(fetchTitle(this.props.userArticleId));
  }
  render(){
    return(
      <View>
        <Text>{store.getState().Article.Title}</Text>
        <Text>{store.getState().Article.Article}</Text>
        <Text>{this.props.userArticleId}</Text>
      </View>
    );
  }
}

export default connect(AppReducer)(ViewArticle);

