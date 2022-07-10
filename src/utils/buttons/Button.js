import React from 'react';
import {Button, View, StyleSheet} from 'react-native';

const Buttons = () => {

    const handlePress = () => {
        console.log('Button pressed');
      };

  return (
    <View style={styles.body}>
      {/* Buttons [uncomment other buttons to explore how they are working] */}
      {/* Normal sample button */}
      <Button title="Sample Button" />

      {/* Button inside a View to have customstyles since you cannot style a button */}
      <View style={styles.button}>
        <Button title="View Button" />
      </View>

      {/* Button with inline onPress function  */}
      {/* This iniline function passed opens an external url when the phone is connected to the internet */}
      {/* <Button
      title="Open Passed URL"
      onPress={() => Linking.openURL('https:www.github.com')}
    /> */}

      {/* Button with external onPress function */}
      {/* <Button title="Sample Button" onPress={handlePress} /> */}
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
  },
  button: {
    margin: 20,
    padding: 10,
    backgroundColor: '#438934',
  },
});

export default Buttons;
