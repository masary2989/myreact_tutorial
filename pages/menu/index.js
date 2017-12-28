import React from 'react';
import { FormLabel, FormInput } from 'react-native-elements';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';


import AppReducer from '../../src/reducers';

import store from '../../src/store';
import { setUID } from '../../src/actions/user';


class MenuPage extends React.Component {
  constructor(props) {
    super(props);
  }
  render(){
    return(
  <View>
    <FormLabel>
    Input your UID
    </FormLabel>
    <FormInput
      onChangeText={(UID)=> {store.dispatch(setUID(UID))} }
      placeholder='please enter your UID..'
    />
    <Text>{store.getState().User.UID}</Text>
  </View>
    );
  }
}

export default connect(AppReducer)(MenuPage);
