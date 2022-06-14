import React, {useState} from 'react';
import {View, Switch, Text, StyleSheet} from 'react-native';

const SwitchDetail = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={styles.container}>
      <Switch
        trackColor={{false: '#767577', true: 'blue'}}
        thumbColor={isEnabled ? 'green' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
      {isEnabled && <Text style={styles.text}>Switch ON</Text>}
      {isEnabled && <Text style={styles.text}>Switch OFF</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  text: {
    color: 'black',
  },
});

export default SwitchDetail;
