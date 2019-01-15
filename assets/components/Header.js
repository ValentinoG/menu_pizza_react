import React from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';

const Header = props => (
	<View style={styles.header}>
		<Text style={styles.headerText}>{props.title}</Text>
	</View>
	)

const styles = StyleSheet.create({
	header:{
		backgroundColor:'#aaa',
		height: 40,
		alignItems:'center',
		justifyContent:'center',
		},
	headerText:{
		fontSize:20,
		fontFamily: Platform.OS==='ios'?'Avenir-Light':'Roboto',
		color: '#efe',
		fontWeight:'bold'
		}
});
export default Header;