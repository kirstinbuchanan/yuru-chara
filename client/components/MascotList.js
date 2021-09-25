import React from 'react';
import Mascot from '../components/MascotCard';
import { FlatList, TouchableOpacity } from 'react-native';

const MascotList = ({ filteredMascots, navigation }) => {
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      data={filteredMascots}
      keyExtractor={(item) => item._id}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => navigation.push('MascotDetails', { mascot: item })}
        >
          <Mascot name={item.name} mascot={item} />
        </TouchableOpacity>
      )}
    />
  );
};

export default MascotList;
