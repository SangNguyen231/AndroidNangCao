import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import AddItem from './components/AddItem';
import EditItem from './components/EditItem';
import ListItem from './components/ListItem';

export default function App() {

  const [isData, setData] = useState([])

  const [isItem, setItem] = useState()

  useEffect(() => {
    fetch("https://6348cc9fa59874146b1113f9.mockapi.io/demo")
      .then((response) => {
        return response.json();
      })
      .then((data) => {setData(data);
      })
      .catch((error) => {
        return console.error("Error: " + error);
      });
  }, []);

  const renderItem = ({item}) => {
    return(
      <ListItem item={item} isData={isData} setData={setData}/>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <AddItem isData={isData} setData={setData}/>
      <FlatList
        data={isData}
        renderItem={renderItem}
      />
      <EditItem/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#ccffff'
  },
});
