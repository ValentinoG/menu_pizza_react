import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import Header from './assets/components/Header';
import Wrapper from './assets/components/Wrapper';
import { createStackNavigator, createAppContainer } from "react-navigation";
StatusBar.setHidden(true);


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header title="Sono una bella app "/>
        <Wrapper/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch', //allin. per riga
    justifyContent: 'flex-start', //allineamento per colonna
  }
});
