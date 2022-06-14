import React from 'react';
import {StyleSheet, View} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import stylesProvider from '../styles/styles';

const Icon = ({icon}) => {
  return (
    <View style={styles.iconContainer}>
      <FontAwesomeIcon icon={icon} color="white" size={32} />
    </View>
  );
};

export default Icon;

const styles = StyleSheet.create({
  iconContainer: {
    backgroundColor: '#003532',
    width: '100%',
    ...stylesProvider.borderStyles(),
    textAlign: 'center',
    padding: 20,
    marginVertical: 10,
  },
});
