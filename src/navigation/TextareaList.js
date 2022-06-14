import React from 'react';
import InputTextArea from '../component/InputTextArea';
import ScrollViewContainer from '../containers/ScrollViewContainer';

const TextareaList = () => {
  return (
    <ScrollViewContainer>
      <InputTextArea />
      <InputTextArea boxType="border-bottom" />
    </ScrollViewContainer>
  );
};

export default TextareaList;
