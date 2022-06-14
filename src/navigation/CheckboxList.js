import React from 'react';
import {View, StyleSheet} from 'react-native';
import CheckBoxComponent from '../component/CheckBoxComponent';
import ScrollViewContainer from '../containers/ScrollViewContainer';
import {stylesConstant} from '../styles/abstracts/abstracts';
import stylesProvider from '../styles/styles';

const CheckboxList = () => {
  return (
    <ScrollViewContainer>
      <View style={styles.checkBoxWrapper}>
        <CheckBoxComponent />
      </View>
    </ScrollViewContainer>
  );
};

export default CheckboxList;

const styles = StyleSheet.create({
  checkBoxWrapper: {
    marginTop: 100,
    width: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
