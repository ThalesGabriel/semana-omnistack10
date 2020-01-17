import React from 'react';

import { View } from 'react-native';
import { WebView } from 'react-native-webview';

const Detail = ({ navigation }) => {
  const github_user = navigation.getParam('github_user');
  
  return(
    <WebView style={{flex: 1}} source={{ uri: `https://github.com/${github_user}` }}/>
    
  )
}

export default Detail;