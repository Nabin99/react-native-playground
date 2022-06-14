import React, {useState} from 'react';
import {TextInput, StyleSheet, View, Text} from 'react-native';
import {stylesConstant} from '../styles/abstracts/abstracts';
import stylesProvider from '../styles/styles';

const InputTextArea = ({
  setValue = () => null,
  value,
  boxType = 'full-border',
}) => {
  const [text, textSet] = useState(value);
  return (
    <View style={styles.container}>
      <Text style={{color: stylesConstant.color.primaryColor}}>Message</Text>
      <TextInput
        multiline
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

export default InputTextArea;

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  input: {
    ...stylesProvider.borderStyles(),
    height: 200,
    color: stylesConstant.color.primaryColor,
  },
  borderBottom: {
    height: 200,
    color: stylesConstant.color.primaryColor,
    borderBottomColor: stylesConstant.color.primaryColor,
    borderBottomWidth: 2,
    borderStyle: 'solid',
  },
});
