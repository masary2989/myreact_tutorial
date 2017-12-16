import React from 'react';
import { FormLabel, FormInput } from 'react-native-elements'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';

import AppReducer from '../../src/reducers';


import store from '../../src/store';
import { Form } from '../../src/actions/form';


class form extends React.Component{
  constructor(props){
      super(props);
      this.state={ title: "Please enter title...", article: "Please enter article..."};
  }
  render() {
    return (
    <View style={{display:'flex', flexDirection: 'column'}}>
      <FormLabel containerStyle={styles.labelContainerStyle}>
       Title
      </FormLabel>
        <FormInput
            placeholder={this.state.title}
            onChangeText={(text) => this.setState({text})}
        />
      <FormLabel containerStyle={styles.labelContainerStyle}>
       Article
      </FormLabel>
      <FormInput
        placeholder={this.state.article}
        containerStyle={{ height: 1000, width: '70%'} }
      />
    </View>
    );
  }
};


const styles = StyleSheet.create({
  headingContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
  },
  heading: {
    color: 'white',
    marginTop: 10,
    fontSize: 22,
  },
  labelContainerStyle: {
    marginTop: 8,
  },
});
