'use strict';
import React, {Component} from 'react';
import { AppRegistry, StyleSheet, Text, View, Image } from 'react-native';
import { Header, Icon } from 'react-native-elements';
import { Scene, Router, Actions } from 'react-native-router-flux';


import menu from './menu.js'


const scenes = Actions.create(
  <Scene key='root'>
    <Scene key='menu' component={menu} title='menu' />
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
        leftComponent ={<Icon name='menu' color= '#fff' onPress={Actions.menu}/>}
        centerComponent ={{ text: 'BLOG', style: { color: '#fff'} }}
        rightComponent ={{ icon: 'home', color: '#fff' }}
      />
      <Image source={pic} style={{width: 250, height: 110}} />
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
