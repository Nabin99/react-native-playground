import React from 'react';
import {FlatList, StyleSheet} from 'react-native';

const FlatListContainer = ({cols = 1, dataList = [], renderItem}) => {
  return (
    <FlatList
      style={styles.listContainer}
      numColumns={cols}
      data={[...dataList]}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
  );
};

export default FlatListContainer;

const styles = StyleSheet.create({
  listContainer: {
    width: '100%',
    marginTop: 10,
  },
});
