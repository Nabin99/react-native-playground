import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import styleProvider from '../styles/styles';

const TextContainer = ({
  fontFamily = 'normal',
  fontWeight = 'normal',
  fontStyle = 'normal',
  color = 'white',
  text,
}) => {
  return (
    <View style={styles.textContainer}>
      <Text style={styles.text(fontFamily, color, fontWeight, fontStyle)}>
        {text}
      </Text>
    </View>
  );
};

export default TextContainer;

const styles = StyleSheet.create({
  textContainer: {
    backgroundColor: '#003532',
    width: '100%',
    ...styleProvider.borderStyles(),
    textAlign: 'center',
    padding: 20,
    marginVertical: 10,
  },
  text: (fontFamily, color, fontWeight, fontStyle) => ({
    color: color,
    fontSize: 24,
    width: '100%',
    fontWeight: fontWeight,
    fontStyle: fontStyle,
    textAlign: 'center',
    fontFamily: fontFamily,
  }),
});
