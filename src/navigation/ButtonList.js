import React from 'react';
import {Button} from 'react-native';
import ButtonComp from '../component/Button';
import ScrollViewContainer from '../containers/ScrollViewContainer';
import {faAdd} from '@fortawesome/free-solid-svg-icons';

const ButtonList = () => {
  return (
    <ScrollViewContainer>
      <ButtonComp title="Click Me" />
      <Button title="Click Me" />
      <ButtonComp title="Add" icon={faAdd} />
    </ScrollViewContainer>
  );
};

export default ButtonList;
