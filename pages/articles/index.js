import React from 'react';
import { ScrollView, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Scene, Actions } from 'react-native-router-flux';
import { List, ListItem } from 'react-native-elements'

const navis = [{title:'MyFirstArticle', edit:'2017/12/11'},
{title:'MySecondArticle', edit:'2017/12/12'},
{title:'MyThirdArticle', edit:'2017/12/13'},
{title:'MySecondArticle', edit:'2017/12/12'},
{title:'MyThirdArticle', edit:'2017/12/13'},
{title:'MySecondArticle', edit:'2017/12/12'},
{title:'MyThirdArticle', edit:'2017/12/13'},
{title:'MySecondArticle', edit:'2017/12/12'},
{title:'MyThirdArticle', edit:'2017/12/13'},
{title:'MySecondArticle', edit:'2017/12/12'},
{title:'MyThirdArticle', edit:'2017/12/13'},
{title:'MySecondArticle', edit:'2017/12/12'},
{title:'MyThirdArticle', edit:'2017/12/13'},
];

import viewarticle from '../viewarticle'

const scenes = Actions.create(
  <Scene key='root' hideNavBar>
    <Scene key='viewarticle' component={viewarticle} title='viewarticle' />
  </Scene>
);


export default articles = () => (
  <ScrollView>
    <Text>menu</Text>
    <List containerStyle={{marginBottom: 20}}>
      {
        navis.map((items, i) => (
         <ListItem
         key={i}
         title={items.title}
         subtitle={items.edit}
         onPress={Actions.viewarticle}
         />
        ))
      }
    </List>
  </ScrollView>
);
