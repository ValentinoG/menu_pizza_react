import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import ListaPizze from './ListaPizze';

const Wrapper = props=>(
	<View style={styles.wrapper}>
		<ListaPizze/>
	</View>
	);



const styles=StyleSheet.create({
	wrapper:{
		flex:1,
		backgroundColor: '#efe',
		//paddingLeft:20
	}
});

export default Wrapper;