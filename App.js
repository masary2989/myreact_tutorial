// import react-native instrument
import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, Header, Icon } from 'react-native-elements';
import { Scene, Router, Actions } from 'react-native-router-flux';

// import redux instrument
// import { createStore, compose, applyMiddleware } from 'redux';
import { Provider, connect } from 'react-redux';
// import thunkMiddleware from 'redux-thunk';

// import app modules
import menu from './pages/menu';
import articlelists from './pages/articles';
import form from './pages/form';
import viewarticle from './pages/viewarticle';

// import store
import store from './src/store';

// make store binded router
const RouterWithRedux = connect()(Router);

// make scene
const scenes = Actions.create(
  <Scene key="root" hideNavBar>
    <Scene key="menu" component={menu} title="menu" />
    <Scene key="articlelists" component={articlelists} title="articlelists" />
    <Scene key="form" component={form} title="form" />
    <Scene key="viewarticle" component={viewarticle} title="viewarticle" />
  </Scene>);


const loadArticleList = () => {
  try {
    console.log('sennisitekureaa');
    return Actions.articlelists;
  } catch (e) {
    return (
      <View style={{ height: '100%', width: '100%' }}>
        <Text>Please enter your UID</Text>
      </View>
    );
  }
};


export default class App extends Component {
  render() {
    return (
      <View style={{ height: '100%', width: '100%' }} >
        <Header
          leftComponent={<Icon name="menu" color="#fff" onPress={Actions.menu} />}
          centerComponent={<Icon name="edit" color="#fff" onPress={Actions.form} />}
          rightComponent={<Icon name="home" color="#fff" onPress={() => loadArticleList} />}
        />
        <Provider store={store}>
          <RouterWithRedux scenes={scenes} />
        </Provider>
      </View>
    );
  }
}

