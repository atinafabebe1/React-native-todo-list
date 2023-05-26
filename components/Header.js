import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>Todo List</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#e74c3c',
    paddingVertical: 20,
    paddingHorizontal: 10,
    marginBottom: 10
  },
  headerText: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'uppercase'
  }
});
