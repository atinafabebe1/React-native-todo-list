import React, { useState } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text } from 'react-native';

export default function AddTodo({ handleAdd }) {
  const [text, setText] = useState('');
  const changeHandler = (val) => {
    setText(val);
  };
  return (
    <View>
      <View style={styles.container}>
        <TextInput onChangeText={changeHandler} style={styles.input} placeholder="Add a todo..." placeholderTextColor="#aaa" />
      </View>
      <TouchableOpacity
        onPress={() => {
          handleAdd(text);
        }}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Add Todo</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginBottom: 16,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 0,
      height: 2
    },
    elevation: 2,
    marginHorizontal: 16
  },
  input: {
    height: 40,
    fontSize: 16
  },
  button: {
    backgroundColor: '#e74c3c',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 5,
    alignSelf: 'center',
    marginBottom: 10
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'uppercase'
  }
});
