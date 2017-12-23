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
    store.dispatch(fetchArticle());
    store.dispatch(fetchTitle());
  }
  render(){
    return(
      <View>
        <Text>{store.getState().Article.Title}</Text>
        <Text>{store.getState().Article.Article}</Text>
      </View>
    );
  }
}

export default connect(AppReducer)(ViewArticle);

