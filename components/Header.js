import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

const Header = ({title}) =>{
	return (
		<View style={styles.header}>
			<Text style={styles.headerTitle}>{title}</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	header:{
		width: '100%',
		height: 70,
		paddingTop: 36,
		backgroundColor: '#722676',
		alignItems: 'center',
		justifyContent: 'center'
	},
	headerTitle:{
		color: '#000',
		fontSize: 22
	}
});

export default Header;