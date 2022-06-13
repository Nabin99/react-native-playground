import React from 'react';
import {View, Text} from 'react-native';
import Toast from '../component/Toast';
import ScrollViewContainer from '../containers/ScrollViewContainer';

const ToastList = () => {
  return (
    <ScrollViewContainer>
      <Toast />
    </ScrollViewContainer>
  );
};

export default ToastList;
