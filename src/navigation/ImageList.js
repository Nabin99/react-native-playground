import React from 'react';
import {Text} from 'react-native-svg';
import ImageComponent from '../component/ImageComponent';
import ScrollViewContainer from '../containers/ScrollViewContainer';
import profileImage from '../assets/profile.jpg';
import textImage from '../assets/texts.jpg';
import button from '../assets/buttons.png';

const ImageList = () => {
  return (
    <ScrollViewContainer>
      <ImageComponent data={profileImage} />
      <ImageComponent data={textImage} />
      <ImageComponent data={button} />
      <Text>Render from url links:-</Text>
      <ImageComponent
        data={{
          uri: 'https://images.unsplash.com/photo-1655121522771-2a84f9c085e5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
        }}
      />
      <ImageComponent
        data={{
          uri: 'https://images.unsplash.com/photo-1655135848421-f96a8c7aed90?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
        }}
      />
    </ScrollViewContainer>
  );
};

export default ImageList;
