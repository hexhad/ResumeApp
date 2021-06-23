import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Tabs from './src/navigation/Tabs';
import {StyleSheet, View, StatusBar} from 'react-native';

const AkvafinBar = ({backgroundColor, ...props}) => (
  <View style={[style.statusBar, {backgroundColor}]}>
    <StatusBar translucent backgroundColor={backgroundColor} {...props} />
  </View>
);

export default function App() {
  return (
    <>
      <AkvafinBar backgroundColor="#f1f1f1" barStyle="dark-content" />
      <NavigationContainer>
        <Tabs />
      </NavigationContainer>
    </>
  );
}

const style = StyleSheet.create({
  statusBar: {
    height: 35,
  },
});
