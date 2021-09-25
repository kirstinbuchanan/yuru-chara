import React from 'react';
import {
  Text,
  View,
  Image,
  Button,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import * as WebBrowser from 'expo-web-browser';

const MascotDetails = ({ route }) => {
  const { mascot } = route.params;

  const handleOpenWithWebBrowser = () => {
    WebBrowser.openBrowserAsync(mascot.officialSite);
  };

  const makeFavourite = (mascot) => {
    const favouriteMascot = { ...mascot, favourite: true };
    return favouriteMascot;
  };

  return (
    <View style={styles.background}>
      <Button title="Back" />
      <TouchableOpacity onPress={() => makeFavourite}>
        {mascot.favourite ? <Text>Unlike</Text> : <Text>Like</Text>}
      </TouchableOpacity>
      <Text style={[styles.heading, styles.name]}>{mascot.name}</Text>
      <Text style={[styles.japanese, styles.heading]}>{mascot.japanese}</Text>
      <Image
        style={styles.mascotImage}
        source={{
          uri: mascot.picture,
        }}
      />
      <View style={styles.mascotAbout}>
        <Text>Representing: {mascot.mascot}</Text>
        <Text>City:{mascot.city}</Text>
        <Text>Prefecture: {mascot.prefecture}</Text>
        <Text>Description: {mascot.description}</Text>
        {mascot.officialSite < 1 ? (
          <Text></Text>
        ) : (
          <Button
            title="Go to Offical Site"
            onPress={() => handleOpenWithWebBrowser()}
          />
        )}
        <Button title="Edit" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    marginLeft: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  japanese: {
    fontSize: 16,
    fontWeight: '300',
  },
  background: {
    backgroundColor: 'pink',
    zIndex: -1,
  },
  mascotImage: {
    height: 300,
    width: 400,
    resizeMode: 'center',
    zIndex: 3,
    borderRadius: 30,
  },
  mascotAbout: {
    backgroundColor: 'white',
    zIndex: 2,
  },
});

export default MascotDetails;
