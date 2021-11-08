import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import ListaItem from './ListaItem';

const Index = (props) =>{

	const {itemList, handleRemoveItem} = props;

	return (
		<View style={styles.items}>
      <FlatList
        data={itemList}
        keyExtractor={item => item.id}
        renderItem={(data) => (
          <ListaItem style={styles.item} item={data.item} handleRemoveItem={handleRemoveItem} />
        )}
      />
    </View>
	)
}

const styles = StyleSheet.create({
  items: {
    backgroundColor: '#ECECEC',
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 20,
  }
});

export default Index;
