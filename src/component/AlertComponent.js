import React from 'react';
import {View, StyleSheet, Alert} from 'react-native';
import ButtonComp from './Button';

const AlertComponent = ({
  buttonLabel,
  title,
  description,
  button1,
  button2,
}) => {
  const createAlert = () =>
    Alert.alert(title, description, [
      {
        text: button1,
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: button2, onPress: () => console.log('OK Pressed')},
    ]);
  return (
    <View style={styles.container}>
      <ButtonComp clickHandler={createAlert} title={buttonLabel} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});

export default AlertComponent;
