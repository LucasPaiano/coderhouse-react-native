import React, {useState} from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const ListaItem = (props) =>{

  const [stateDone, setStatus] = useState(false);

	const {item, handleRemoveItem} = props

  const toggleState = () => {
    setStatus(value => !value);
  }

	return (
    <View style={styles.item} key={item.id}>
      <Text style={stateDone ? styles.itemDone : styles.itemPending} >{item.value}</Text>
      <View style={styles.buttonsContainer}>
        <Button title={stateDone ? 'To Do' : 'Done'} onPress={toggleState} />
        <View style={{marginLeft: 10}}>
          <Button title="X" onPress={() => handleRemoveItem(item.id)} />
        </View>
      </View>
    </View>
	)
}

const styles = StyleSheet.create({
  item: {
      padding: 10,
      marginTop: 10,
      marginBottom: 10,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderColor: 'black',
      borderWidth: 1,
    },
   itemDone: {
     textDecorationLine: 'line-through',
     textDecorationStyle: 'solid'
   },
   itemPending:{
     textDecorationLine: 'none'
   },
   buttonsContainer:{
     flexDirection: 'row',
     alignItems: 'center',
     justifyContent: 'space-between'
   }
});

export default ListaItem;