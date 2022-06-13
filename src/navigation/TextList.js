import React from 'react';
import TextContainer from '../component/TextContainer';
import {StyleSheet, ScrollView} from 'react-native';

const list = [
  {
    text: 'Normal Text Example',
    color: 'white',
    fontFamily: 'normal',
    fontStyle: 'italic',
    fontWeight: 'normal',
  },
  {
    text: 'Normal Bold Text Example',
    color: 'white',
    fontFamily: 'normal',
    fontStyle: 'normal',
    fontWeight: 'normal',
  },
  {
    text: 'Normal Bold Text Example',
    color: 'white',
    fontFamily: 'normal',
    fontStyle: 'normal',
    fontWeight: 'bold',
  },
  {
    text: 'Sans-serif-condensed Text Example',
    color: 'white',
    fontFamily: 'sans-serif-condensed',
    fontStyle: 'italic',
    fontWeight: 'normal',
  },
  {
    text: 'Monospace Text Example',
    color: 'white',
    fontFamily: 'monospace',
    fontStyle: 'italic',
    fontWeight: 'normal',
  },
];

const TextList = () => {
  return (
    <ScrollView style={styles.scroller}>
      {list.map((obj, i) => (
        <TextContainer
          key={i}
          color={obj.color}
          fontFamily={obj.fontFamily}
          fontStyle={obj.fontStyle}
          fontWeight={obj.fontWeight}
          text={obj.text}
        />
      ))}
    </ScrollView>
  );
};

export default TextList;

const styles = StyleSheet.create({
  scroller: {
    marginTop: 20,
    flex: 1,
    padding: 20,
  },
});
