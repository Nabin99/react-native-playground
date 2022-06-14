import React from 'react';
import Input from '../component/Input';
import ScrollViewContainer from '../containers/ScrollViewContainer';

const InputList = () => {
  return (
    <ScrollViewContainer>
      <Input />
      <Input boxType="border-bottom" />
    </ScrollViewContainer>
  );
};

export default InputList;
