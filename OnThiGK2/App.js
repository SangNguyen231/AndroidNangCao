import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import AddItem from './components/AddItem';
import ListItem from './components/ListItem';

export default function App() {

  const [data, setData] = useState()

  useEffect(() => {
    fetch('https://6348cc9fa59874146b1113f9.mockapi.io/OnThiGK')
      .then(data => data.json())
      .then(data => setData(data))
    console.log(data)
  },[])

  return (
    <SafeAreaView style={styles.container}>
      <AddItem isdata={data} setData={setData}/>
      <ListItem data={data} setData={setData}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop:20,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
