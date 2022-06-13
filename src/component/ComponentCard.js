import React, {useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import stylesProvider from '../styles/styles';

const ComponentCard = ({text, clickHandler}) => {
  const [clickStyle, clickStyleSet] = useState(false);
  return (
    <TouchableOpacity
      style={styles.container}
      onPressIn={() => {
        clickStyleSet(true);
      }}
      onPress={() => {
        clickHandler();
      }}
      onPressOut={() => {
        clickStyleSet(false);
      }}>
      <View>
        <Text
          style={
            clickStyle ? {...styles.clickStyle, ...styles.text} : styles.text
          }>
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ComponentCard;

const styles = StyleSheet.create({
  container: {
    ...stylesProvider.borderStyles(1, 'solid', 'white', 10),
    backgroundColor: '#003532',
    minHeight: 300,
    width: '50%',
    ...stylesProvider.flexStyles(),
    marginVertical: 10,
  },
  text: {
    color: 'white',
    fontSize: 26,
    fontWeight: 'bold',
  },
  clickStyle: {
    fontSize: 32,
    fontWeight: 'bold',
  },
});
