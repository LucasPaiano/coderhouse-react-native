import React from 'react';
import { View, StyleSheet, Button, TextInput} from 'react-native';

const AddItem = (props) =>{

	const {onChange, handleAddItem, textValue } = props;

	return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Item de lista"
        style={styles.input}
        onChangeText={onChange}
        value={textValue}
      />
      <Button
        title="ADD"
        onPress={handleAddItem}
      />
    </View>
	)
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  input: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    width: 200,
  }
});

export default AddItem;