import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

export default function App() {
  return (
   <View style={style.container}>
    <Text style={style.titulo}>Hello</Text>

    <StatusBar style='auto' />
   </View>

  );
}

const style = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  titulo: {
    fontSize: 30
  }

});

