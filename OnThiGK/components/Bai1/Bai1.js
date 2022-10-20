import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Create from './Create'
import Item from './Item'


const Bai1 = () => {

  const [taskList, setTaskList] = useState([])

  const handleAddTask = (task) => {
    setTaskList([...taskList,task])
  }

  const handleDeleteTask = (index) => {
    let taskListTmp = [...taskList]
    taskListTmp.splice(index,1) 
    setTaskList(taskListTmp)
  }

  return (
    <View style={{justifyContent:'space-between', marginTop:10}}>
      <Create onAddTask={handleAddTask}/>
      <ScrollView>
        {
          taskList.map((item, index) => {
            return <Item key={index} title={item} number={index+1} onDeleteTask={() => handleDeleteTask(index)}/>
          })
        }
      </ScrollView>
    </View>
  )
}

export default Bai1

const styles = StyleSheet.create({})