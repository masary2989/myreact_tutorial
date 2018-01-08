import React from 'react';
import { ScrollView, Text, Button } from 'react-native';
import { Scene, Actions } from 'react-native-router-flux';
import { List, ListItem } from 'react-native-elements'
import { connect } from 'react-redux';


import viewarticle from '../viewarticle';
import { fetchArticleLists } from '../../src/actions/article_list';
import store from '../../src/store';
import AppReducer from '../../src/reducers';


class articlelists extends React.Component{
  constructor(props){
      super(props);
      store.dispatch(fetchArticleLists())
  }
  render() {
    return (
  <ScrollView>
    <Text>{console.log('render')}</Text>
    <List containerStyle={{marginBottom: 20}}>
      {
        store.getState().ArticleLists.Array.map(items => (
          <ListItem
            key={items.id}
            title={items.title}
            subtitle={items.updated_at}
            onPress={() => Actions.viewarticle({ userArticleId: items.id })}
          />
        ))
      }
    </List>
  </ScrollView>
);
}
}

export default connect(AppReducer)(articlelists);
