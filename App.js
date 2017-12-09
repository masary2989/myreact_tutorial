'use strict';
import React, {Component} from 'react';
import { AppRegistry, StyleSheet, Text, View, Image } from 'react-native';
import { Header, Icon } from 'react-native-elements';
import { Scene, Router, Actions } from 'react-native-router-flux';


import menu from './pages/menu'
import articles from './pages/articles'
import form from './pages/form'

const scenes = Actions.create(
  <Scene key='root' hideNavBar>
    <Scene key='menu' component={menu} title='menu' />
    <Scene key='articles' component={articles} title='articles' />
    <Scene key='form' component={form} title='form' />
  </Scene>
);

export default class App extends Component {
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
    <View>
      <Header
        leftComponent ={<Icon name='menu' color= '#fff' onPress={Actions.menu} />}
        centerComponent ={<Icon name='edit' color= '#fff' onPress={Actions.form} />}
        rightComponent ={<Icon name='home' color= '#fff' onPress={Actions.articles} />}
      />
      <Router scenes={scenes}/>
    </View>
    );
  }
}


const styles = StyleSheet.create({
  description: {
    fontSize: 18,
    textAlign: 'center',
    color: '#656565',
    marginTop: 65,
  },
});

//AppRegistry.registerComponent('MyReactTutorial', () => HelloWorldApp);
