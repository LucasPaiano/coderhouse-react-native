import React, { useState } from 'react';
import { StyleSheet, Alert, View } from 'react-native';
import ModalItem from './components/Modal';
import AddItem from './components/AddItem';
import Lista from './components/Lista/Index';

export default function App() {
  const [textValue, setTextValue] = useState('');
  const [itemList, setItemList] = useState([]);
  const [itemSelected, setItemSelected] = useState({});
  const [modalVisible, setModalVisible] = useState(false);

  const handleChangeText = (value) => {
    setTextValue(value);
  }

  const handleAddItem = () => {
    if (textValue.length > 0) {
      const item = {
        value: textValue,
        id: Math.random().toString(),
      };
      setItemList([
        ...itemList,
        item,
      ]);
      setTextValue('');
    }else{
      Alert.alert("Please enter a value");
    }
  }

  const handleRemoveItem = (id) => {
    setModalVisible(true);
    setItemSelected(itemList.find(item => item.id === id));
  }

  const handleRemoveConfirm = () => {
    const newList = itemList.filter(item => item.id !== itemSelected.id);
    setItemList(newList);
    setModalVisible(false);
    setItemSelected({});
  }

  return (
    <View style={styles.screen}>

      <AddItem
        onChange={handleChangeText}
        handleAddItem={handleAddItem}
        value={textValue}
      />

      <Lista itemList={itemList} handleRemoveItem={handleRemoveItem} />

      <ModalItem visible={modalVisible} onDelete={handleRemoveConfirm.bind(this, itemSelected.id)} item={itemSelected} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 30,
    paddingTop: 70
  }
});