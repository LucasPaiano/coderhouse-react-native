import React from 'react';
import { View, Text, StyleSheet, Button, Modal} from 'react-native';

const ModalItem = (props) =>{

	const {visible, onDelete, item} = props;

	if(!visible) return null;

	return (
    <Modal animationType="slide">
      <View>
        <View>
          <Text>¿Está seguro que desea borrar?</Text>
        </View>
        <View>
          <Text>{item.value}</Text>
        </View>
      </View>
      <View>
        <Button title="CONFIRMAR" onPress={onDelete} />
      </View>
    </Modal>
	)
}

const styles = StyleSheet.create({});

export default ModalItem;
