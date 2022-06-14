import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Divider = ({text, floatText = false}) => (
  <>
    {!floatText ? (
      <View>
        <Text style={styles.textStyle}>{text}</Text>
        <View style={styles.lineStyle}></View>
      </View>
    ) : (
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
        <View>
          <Text
            style={{
              width: 50,
              textAlign: 'center',
              color: 'black',
              fontWeight: 'bold',
              fontSize: 20,
            }}>
            {text}
          </Text>
        </View>
        <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
      </View>
    )}
  </>
);
const styles = StyleSheet.create({
  textContainer: {
    borderBottomColor: 'black',
    borderBottomWidth: 2,
    marginBottom: 40,
    marginHorizontal: 25,
  },
  textStyle: {
    color: 'black',
    fontSize: 20,
    margin: 30,
  },
  lineStyle: {
    borderWidth: 0.5,
    borderColor: 'black',
    margin: 30,
  },
});
export default Divider;
