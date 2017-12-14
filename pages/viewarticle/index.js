import React from 'react';
import { View, Text } from 'react-native';


const article = 'I write about my dinner.'
const title = 'My first article'
const edit = '2017/12/11'


export default viewarticle = () => (
    <View>
        <Text>{title}</Text>
        <Text>{edit}</Text>
        <Text>{article}</Text>
    </View>
);

