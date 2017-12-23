import React from 'react';
import { FormLabel, FormInput, Button } from 'react-native-elements';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import AppReducer from '../../src/reducers';


import store from '../../src/store';
import { inputTitle, inputArticle, postArticle } from '../../src/actions/form';


class FormPage extends React.Component{
  constructor(props){
      super(props);
      this.state={ title: "Please enter title...", article: "Please enter article..."};
  }
  render() {
    return (
    <View style={{display:'flex', height:"100%", flexDirection: 'column'}}>
      <FormLabel containerStyle={styles.labelContainerStyle}>
       Title
      </FormLabel>
        <FormInput
            placeholder={store.getState().Form.Title}
            onChangeText={(Title) => store.dispatch(inputTitle(Title))}
        />
      <Text>{store.getState().Form.Title}</Text>
      <FormLabel containerStyle={styles.labelContainerStyle}>
       Article
      </FormLabel>
      <FormInput
        placeholder={store.getState().Form.Article}
        onChangeText={(Article) => store.dispatch(inputArticle(Article))}
        containerStyle={{ height: 100, width: '70%'} }
        multiLine={true}
        numberOfLines={4}
      />
      <Text>{store.getState().Form.Article}</Text>
      <Button
        title="BUTTON"
        onPress={() => store.dispatch(postArticle())}
      />
    </View>
    );
  }
}


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


export default connect(AppReducer)(FormPage);
