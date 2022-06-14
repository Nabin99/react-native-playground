import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';

const ScrollViewContainer = ({children}) => {
  return <ScrollView style={styles.scroller}>{children}</ScrollView>;
};

export default ScrollViewContainer;

const styles = StyleSheet.create({
  scroller: {
    marginVertical: 20,
    flex: 1,
    padding: 20,
  },
});
