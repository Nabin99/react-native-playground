import React from 'react';
import {SafeAreaView} from 'react-native';
import ComponentCard from '../component/ComponentCard';
import FlatListContainer from '../containers/FlatListContainer';

const Home = ({navigation}) => {
  return (
    <SafeAreaView>
      <FlatListContainer
        cols={2}
        dataList={[
          {id: 1, name: 'AlertList'},
          {id: 2, name: 'AvatarList'},
          {id: 3, name: 'ButtonList'},
          {id: 4, name: 'CheckboxList'},
          {id: 5, name: 'DividerList'},
          {id: 6, name: 'FlatList'},
          {id: 7, name: 'IconList'},
          {id: 8, name: 'ImageList'},
          {id: 9, name: 'InputList'},
          {id: 11, name: 'ModalList'},
          {id: 11, name: 'SwitchList'},
          {id: 12, name: 'TextareaList'},
          {id: 13, name: 'TextList'},
          {id: 14, name: 'ToastList'},
        ]}
        renderItem={({item}) => (
          <ComponentCard
            text={item.name}
            clickHandler={() => navigation.navigate(item.name)}
          />
        )}
      />
    </SafeAreaView>
  );
};

export default Home;
