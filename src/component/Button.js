import React from 'react';
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import {stylesConstant} from '../styles/abstracts/abstracts';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

const ButtonComp = ({title, clickHandler, icon}) => {
  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={clickHandler}>
      <View style={styles.buttonWrapper}>
        {icon && <FontAwesomeIcon icon={icon} color="white" size={24} />}
        <Text style={styles.text}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ButtonComp;

const styles = StyleSheet.create({
  buttonWrapper: {
    width: '100%',
    paddingVertical: 10,
    paddingHorizontal: 10,
    color: stylesConstant.color.primaryColor,
    borderColor: stylesConstant.color.borderColorDefault,
    backgroundColor: stylesConstant.color.primaryColor,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  buttonRound: {
    borderRadius: 100,
  },
  buttonContainer: {
    marginVertical: 20,
  },
  text: {
    color: stylesConstant.color.secondaryColor,
    fontSize: 24,
    fontWeight: 'bold',
    marginHorizontal: 10,
  },
});
