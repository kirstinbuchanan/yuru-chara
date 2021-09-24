import React from 'react';
const MascotList = (props) => {
  return (
    <FlatList
      data={mascots}
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
