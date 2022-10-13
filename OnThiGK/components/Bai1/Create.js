import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const Create = (props) => {

  const [task,setTask] = useState('')

  const handleAddTask = () => {
    if(task.length === 0){
      alert("Bạn vui lòng nhập gì đó")
      return false
    }
    props.onAddTask(task)
    setTask('')
  }

  return (
    <View style={{ justifyContent: 'space-between', alignItems: 'center' }}>
      <View style={{ height: 1, backgroundColor: 'black', marginTop: 20, width: 500 }} />
      <View style={{ flexDirection: 'row', justifyContent: 'space-around', width: '100%', marginTop:20}}>
        <View style={{ borderColor: 'black', borderWidth: 1, width: 200, height: 40, justifyContent: 'center' }}>
          <TextInput 
            value={task}
            onChangeText={(text) => setTask(text)}
            placeholder='Nhập thông tin ' 
            style={{ marginLeft: 10 }}></TextInput>
        </View>
        <TouchableOpacity
          style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: 'red', width: 100, borderRadius: 10 }}
          onPress={handleAddTask}
        >
          <Text style={{ color: '#fff', fontWeight: '700' }}>Submit</Text>
        </TouchableOpacity>
      </View>
      <View style={{ height: 1, backgroundColor: 'black', marginTop: 20, width: 500 }} />
    </View>
  )
}

export default Create

const styles = StyleSheet.create({})