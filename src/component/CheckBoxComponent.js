import React, {useState} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

const CheckBoxComponent = () => {
  const [checked, checkedSet] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.checkBoxContainer}>
        <CheckBox
          disabled={false}
          value={checked}
          onValueChange={() => checkedSet(pre => !pre)}
          style={styles.checkBoxComponent}
          tintColors={'black'}
        />
        <Text style={styles.label}>
          Checked ?{' '}
          {checked ? (
            <Text> Checked is true </Text>
          ) : (
            <Text> Checked is false</Text>
          )}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
    marginVertical: 20,
  },
  checkBoxContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    height: 300,
  },
  checkBoxComponent: {
    color: 'black',
    borderColor: 'black',
  },
  label: {
    margin: 8,
    color: 'black',
    fontSize: 15,
  },
});

export default CheckBoxComponent;
