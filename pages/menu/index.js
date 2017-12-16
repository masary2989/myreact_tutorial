import React from 'react';
import { FormLabel, FormInput } from 'react-native-elements';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';


import store from '../../src/store';
import {setUID} from '../../src/actions/user';

const UID = 'UID'

class menu extends React.Component {
  constructor(props) {
    super(props);
    this.state={UID: "0000"};
  }
  render(){
    return(
  <View>
    <Text>menu</Text>
    <FormLabel>
    Input your UID
    </FormLabel>
    <FormInput
      onChangeText={(UID)=> {store.dispatch(setUID(UID)); this.forceUpdate()} }
      placeholder='please enter your UID..'
    />
    <Text>{store.getState().user.UID}</Text>
  </View>
    );
  }
}


function mapStateToProps(state) {
  return {
    UID: state.UID,
  };


