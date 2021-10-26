import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  return (

    <View style={styles.container}>
      
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder="Item de lista" />
        <Button title="Add" />
      </View>
      
      <View>
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 20,
    paddingRight: 20
  },
  inputContainer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  textInput:{
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    flex: 1,
    marginRight: 20
  }
});
