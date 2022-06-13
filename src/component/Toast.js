import React from 'react';
import {View, StyleSheet, ToastAndroid, Button, StatusBar} from 'react-native';
import ButtonComp from './Button';

const Toast = () => {
  const showToast = () => {
    ToastAndroid.show('Toast test part 1', ToastAndroid.SHORT);
  };

  const showToastWithGravity = () => {
    ToastAndroid.showWithGravity(
      'Toast test part 2',
      ToastAndroid.SHORT,
      ToastAndroid.CENTER,
    );
  };

  const showToastWithGravityAndOffset = () => {
    ToastAndroid.showWithGravityAndOffset(
      'Toast test part 3',
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      25,
      50,
    );
  };

  return (
    <View style={styles.container}>
      <ButtonComp title="Toggle Toast" clickHandler={() => showToast()} />
      <ButtonComp
        title="Toggle Toast With Gravity"
        clickHandler={() => showToastWithGravity()}
      />
      <ButtonComp
        title="Toggle Toast With Gravity & Offset"
        clickHandler={() => showToastWithGravityAndOffset()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: StatusBar.currentHeight,
    padding: 8,
  },
});

export default Toast;
