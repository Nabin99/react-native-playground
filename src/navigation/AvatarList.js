import React from 'react';
import Avatar from '../component/AvatarComponent';
import ScrollViewContainer from '../containers/ScrollViewContainer';
import profileImage from '../assets/profile.jpg';
import {stylesConstant} from '../styles/abstracts/abstracts';

const AvatarList = () => {
  return (
    <ScrollViewContainer>
      <Avatar
        Img={profileImage}
        borderRadius={100}
        borderWidth={8}
        borderColor={stylesConstant.color.primaryColor}
      />
      <Avatar
        Img={profileImage}
        borderRadius={100}
        borderWidth={1}
        borderColor={stylesConstant.color.primaryColor}
      />
      <Avatar
        Img={profileImage}
        borderRadius={10}
        borderWidth={8}
        borderColor={stylesConstant.color.primaryColor}
      />
    </ScrollViewContainer>
  );
};

export default AvatarList;
