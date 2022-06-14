import React from 'react';
import {Image, StyleSheet} from 'react-native';

const ImageDetail = ({data}) => {
  return <Image style={styles.image} source={data} />;
};

export default ImageDetail;

const styles = StyleSheet.create({
  image: {
    width: 400,
    height: 400,
    marginVertical: 20,
  },
});
