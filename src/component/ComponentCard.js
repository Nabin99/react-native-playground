import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import stylesProvider from '../styles/styles';
const ComponentCard = ({text, clickHandler, image}) => {
  const [clickStyle, clickStyleSet] = useState(false);
  return (
    <TouchableOpacity
      style={styles.container}
      onPressIn={() => {
        clickStyleSet(true);
      }}
      onPress={() => {
        clickHandler();
      }}
      onPressOut={() => {
        clickStyleSet(false);
      }}>
      <ImageBackground style={styles.backgroundImage} source={image}>
        <View style={styles.textContainer}>
          <Text
            style={
              clickStyle ? {...styles.clickStyle, ...styles.text} : styles.text
            }>
            {text}
          </Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default ComponentCard;

const styles = StyleSheet.create({
  container: {
    ...stylesProvider.borderStyles(1, 'solid', 'white', 20),
    backgroundColor: '#003532',
    height: 300,
    width: '50%',
    ...stylesProvider.flexStyles(),
    marginVertical: 10,
    overflow: 'hidden',
  },
  textContainer: {
    width: '100%',
    ...stylesProvider.flexStyles(),
    backgroundColor: '#414141',
    opacity: 0.9,
    height: 300,
  },
  text: {
    color: 'white',
    fontSize: 26,
    fontWeight: 'bold',
  },
  clickStyle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'black',
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
  },
});
