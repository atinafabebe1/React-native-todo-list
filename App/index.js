import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Text } from 'react-native';
import Header from '../components/Header';
import Todos from '../components/Todos';
import AddTodo from '../components/AddTodo';

export default function App() {
  const [todos, setTodos] = useState([
    { text: 'Buy coffee', key: '1' },
    { text: 'Create an app', key: '2' },
    { text: 'Play football', key: '3' }
  ]);

  const pressHandler = (key) => {
    setTodos((prevTodo) => {
      return prevTodo.filter((todo) => todo.key !== key);
    });
  };
  const handleAdd = (text) => {
    setTodos((prevTodo) => {
      return [{ text: text, key: Math.random().toString() }, ...prevTodo];
    });
  };
  return (
    <View style={styles.container}>
      <Header />
      <AddTodo handleAdd={handleAdd} />
      <View style={styles.content}>
        <FlatList data={todos} renderItem={({ item }) => <Todos item={item} pressHandler={pressHandler} />} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5'
  },

  content: {
    flex: 1,
    paddingHorizontal: 20
  }
});
