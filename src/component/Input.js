import React, {useState} from 'react';
import {TextInput, StyleSheet, View, Text} from 'react-native';
import {stylesConstant} from '../styles/abstracts/abstracts';
import stylesProvider from '../styles/styles';

const Input = ({setValue = () => null, value, boxType = 'full-border'}) => {
  const [text, textSet] = useState(value);
  return (
    <View style={styles.container}>
      <Text style={{color: stylesConstant.color.primaryColor}}>Message</Text>
      <TextInput
        style={boxType === 'full-border' ? styles.input : styles.borderBottom}
        onChangeText={value => textSet(value)}
        value={text}
        onBlur={value => setValue(value)}
        placeholder="Usefull placeholder"
        placeholderTextColor={stylesConstant.color.primaryColor}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  input: {
    ...stylesProvider.borderStyles(),
    color: stylesConstant.color.primaryColor,
  },
  borderBottom: {
    color: stylesConstant.color.primaryColor,
    borderBottomColor: stylesConstant.color.primaryColor,
    borderBottomWidth: 2,
    borderStyle: 'solid',
  },
});
