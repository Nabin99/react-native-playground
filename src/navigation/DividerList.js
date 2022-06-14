import React from 'react';
import Divider from '../component/DividerComponent';
import ScrollViewContainer from '../containers/ScrollViewContainer';

const DividerList = () => {
  return (
    <ScrollViewContainer>
      <Divider text={'This is the component 1 with divider'} />
      <Divider text={''} />
      <Divider floatText={true} text={'Think Twice'} />
    </ScrollViewContainer>
  );
};

export default DividerList;
