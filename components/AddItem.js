import React from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';

const AddItem = ({title}) => {
  return (
    <View>
      <TextInput placeholder="Add Item..." style={styles.input} />
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btnText}>➕ Add Item</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    padding: 8,
    fontSize: 16
  },

  btn: {
    backgroundColor: '#c2bad8',
    padding: 9,
    margin: 5,
  },

  btnText: {
    color: 'darkslateblue',
    fontSize: 20,
    textAlign: 'center'
  }
  
});

export default AddItem;