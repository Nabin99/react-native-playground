import React from 'react';
import Icon from '../component/Icon';
import ScrollViewContainer from '../containers/ScrollViewContainer';
import {
  faAdd,
  faAddressBook,
  faAmbulance,
  faBicycle,
  faBridge,
  faCar,
  faUser,
  faCartPlus,
} from '@fortawesome/free-solid-svg-icons';

const iconList = [
  faAdd,
  faAddressBook,
  faAmbulance,
  faBicycle,
  faBridge,
  faCar,
  faUser,
  faCartPlus,
];

const IconList = () => {
  return (
    <ScrollViewContainer>
      {iconList.map((item, i) => (
        <Icon key={i} icon={item} />
      ))}
    </ScrollViewContainer>
  );
};

export default IconList;
