import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { FormLabel, FormInput } from 'react-native-elements';

import AppReducer from '../../src/reducers';
import store from '../../src/store';
import { fetchArticle } from '../../src/actions/article';

class ViewArticle extends React.Component {
  constructor(props) {
    super(props);
  }
  render(){
    return(
      <View>
        <FormInput
          placeholder={store.getState().Form.Title}
          onChangeText={() => store.dispatch(fetchArticle())}
        />
        <Text>menu</Text>
        <Text>{store.getState().Article.Article}</Text>
        <Text>{console.log(store.getState())}</Text>
      </View>
    );
  }
}

export default connect(AppReducer)(ViewArticle);

