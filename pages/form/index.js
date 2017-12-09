import React from 'react';
import { FormLabel, FormInput } from 'react-native-elements'
import { View, Text, TextInput, UselessTextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default form = () => (
    <View style={{display:'flex', flexDirection: 'column'}}>
    <TextInput placeholder= 'input'/>
    <View style={{
       borderBottomColor: '#000000',
       borderBottomWidth: 1 }}
   >
    </View>
  </View>
);

