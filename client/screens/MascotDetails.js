import React from 'react';
import { Text, View, Stylesheet, Image } from 'react-native';

const MascotDetails = ({ route }) => {
  const { mascot } = route.params;
  return (
    <View>
      <Image
        style={{ height: 300, width: 400, resizeMode: 'center' }}
        source={{
          uri: 'https://vignette.wikia.nocookie.net/kancolle/images/a/a2/PANIC_MODE.png/revision/latest?cb=20160801155439',
        }}
      />
      <Text>Name: {mascot.name}</Text>
      <Text>Japanese: {mascot.japanese}</Text>
      <Text>Prefecture: {mascot.prefecture}</Text>
      <Text>Description: {mascot.description}</Text>
    </View>
  );
};

export default MascotDetails;
