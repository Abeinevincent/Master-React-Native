/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Buttons from './src/utils/Buttons';

const App = () => {
  
  return (
    <View style={styles.body}>
      <Buttons />
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  }
});

export default App;
