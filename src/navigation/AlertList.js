import React from 'react';
import AlertComponent from '../component/AlertComponent';
import ScrollViewContainer from '../containers/ScrollViewContainer';

const AlertList = () => {
  return (
    <ScrollViewContainer>
      <AlertComponent
        title={'Example Alert'}
        buttonLabel={'Press to popup alert'}
        button1={'Ok'}
        button2="Cancel"
        description={'This just an example'}
      />
      <AlertComponent
        title={'Example Alert 2'}
        buttonLabel={'Press to popup alert 2'}
        button1={'Ok'}
        button2="Cancel"
        description={'This just an example 2'}
      />
      <AlertComponent
        title={'Example Alert 3'}
        buttonLabel={'Press to popup alert 3'}
        button1={'Ok'}
        button2="Cancel"
        description={'This just an example 3'}
      />
    </ScrollViewContainer>
  );
};

export default AlertList;
