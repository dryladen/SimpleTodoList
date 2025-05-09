import Icon from '@react-native-vector-icons/fontawesome6';
import React from 'react';
import {Text, TouchableHighlight, View} from 'react-native';

type Props = {
  message: string;
  onPress: () => void;
  onDelete: () => void;
};

function Task({message, onPress, onDelete}: Readonly<Props>) {
  return (
    <View className="flex-row flex-1 px-4 p-2 ">
      <View className="flex-1 flex-row ">
        <Text className="flex-wrap">{message}</Text>
      </View>
      <View className="flex-row gap-3 ">
        <TouchableHighlight onPress={onPress} underlayColor={'white'}>
          <View className="p-2 bg-blue-500 rounded-xl">
            <Icon name="pencil" iconStyle="solid" color={'white'} size={16} />
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={onDelete}
          underlayColor={'white'}
          className="rounded-md">
          <View className="p-2 bg-red-500 rounded-xl">
            <Icon
              name="trash-can"
              iconStyle="solid"
              color={'white'}
              size={16}
            />
          </View>
        </TouchableHighlight>
      </View>
    </View>
  );
}

export default Task;
