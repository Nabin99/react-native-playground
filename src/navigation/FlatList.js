import React from 'react';
import {Text} from 'react-native';
import FlatListContainer from '../containers/FlatListContainer';

import ComponentCard from '../component/ComponentCard';
import textImage from '../assets/texts.jpg';

const FlatList = () => {
  return (
    <>
      <FlatListContainer
        cols={2}
        dataList={[
          {id: 1, name: 'AlertList', image: textImage},
          {id: 2, name: 'AvatarList', image: textImage},
          {id: 3, name: 'ButtonList', image: textImage},
          {id: 4, name: 'CheckboxList', image: textImage},
          {id: 5, name: 'DividerList', image: textImage},
          {id: 6, name: 'FlatList', image: textImage},
          {id: 7, name: 'IconList', image: textImage},
          {id: 8, name: 'ImageList', image: textImage},
          {id: 9, name: 'InputList', image: textImage},
          {id: 10, name: 'ModalList', image: textImage},
          {id: 11, name: 'SwitchList', image: textImage},
          {id: 12, name: 'TextareaList', image: textImage},
          {id: 13, name: 'TextList', image: textImage},
          {id: 14, name: 'ToastList', image: textImage},
        ]}
        renderItem={({item}) => (
          <ComponentCard
            text={item.name}
            image={item.image}
            clickHandler={() => null}
          />
        )}
      />
      <Text>---------------------------------</Text>
      <FlatListContainer
        cols={1}
        dataList={[
          {id: 1, name: 'AlertList', image: textImage},
          {id: 2, name: 'AvatarList', image: textImage},
          {id: 3, name: 'ButtonList', image: textImage},
          {id: 4, name: 'CheckboxList', image: textImage},
          {id: 5, name: 'DividerList', image: textImage},
          {id: 6, name: 'FlatList', image: textImage},
          {id: 7, name: 'IconList', image: textImage},
          {id: 8, name: 'ImageList', image: textImage},
          {id: 9, name: 'InputList', image: textImage},
          {id: 10, name: 'ModalList', image: textImage},
          {id: 11, name: 'SwitchList', image: textImage},
          {id: 12, name: 'TextareaList', image: textImage},
          {id: 13, name: 'TextList', image: textImage},
          {id: 14, name: 'ToastList', image: textImage},
        ]}
        renderItem={({item}) => (
          <ComponentCard
            text={item.name}
            clickHandler={() => null}
            image={item.image}
          />
        )}
      />
    </>
  );
};

export default FlatList;
