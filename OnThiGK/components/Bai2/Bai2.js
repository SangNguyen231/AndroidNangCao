import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Item from './Item';

const Bai2 = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getMovies = async () => {
    try {
      const response = await fetch('https://6348cc9fa59874146b1113f9.mockapi.io/demo');
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <View style={{ flex: 1, padding: 24 }}>
      <View style={{ justifyContent: 'space-between', alignItems: 'center' }}>
      <View style={{ height: 1, backgroundColor: 'black', marginTop: 20, width: 500 }} />
      <View style={{ flexDirection: 'row', justifyContent: 'space-around', width: '100%', marginTop:20}}>
        <View style={{ borderColor: 'black', borderWidth: 1, width: 200, height: 40, justifyContent: 'center' }}>
          <TextInput 
            // value={task}
            // onChangeText={(text) => setTask(text)}
            placeholder='Nhập thông tin ' 
            style={{ marginLeft: 10 }}></TextInput>
        </View>
        <TouchableOpacity
          style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: 'red', width: 100, borderRadius: 10 }}
          //onPress={handleAddTask}
        >
          <Text style={{ color: '#fff', fontWeight: '700' }}>Submit</Text>
        </TouchableOpacity>
      </View>
      <View style={{ height: 1, backgroundColor: 'black', marginTop: 20, width: 500 }} />
    </View>
      {isLoading ? <ActivityIndicator /> : (
        <FlatList
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => <Item item={item}/>
          }
        />
      )}
    </View>
  );
}

export default Bai2

const styles = StyleSheet.create({})