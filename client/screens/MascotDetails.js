import React from 'react';
import { Text, View, Stylesheet, Image, Button } from 'react-native';
import * as WebBrowser from 'expo-web-browser';

const MascotDetails = ({ route }) => {
  const { mascot } = route.params;

  // handleOpenWithWebBrowser = () => {
  //   WebBrowser.openBrowserAsync();
  // };

  return (
    <View>
      <Image
        style={{ height: 300, width: 400, resizeMode: 'center' }}
        source={{
          uri: mascot.picture,
        }}
      />
      <Text>Name: {mascot.name}</Text>
      <Text>Japanese: {mascot.japanese}</Text>
      <Text>Prefecture: {mascot.prefecture}</Text>
      <Text>Description: {mascot.description}</Text>
      <Button title="Go to mascot site" />
    </View>
  );
};

export default MascotDetails;
