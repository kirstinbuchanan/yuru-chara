import React, { useEffect, useState } from 'react';
import {
  Text,
  View,
  Image,
  Button,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import { Icon } from 'react-native-elements';
import { toggleFavourites } from '../ApiClientService';

const MascotDetails = ({ route, mascots, getMascots, setIsLiked, isLiked }) => {
  const { mascot } = route.params;

  const handleOpenWithWebBrowser = () => {
    WebBrowser.openBrowserAsync(mascot.officialSite);
  };

  const toggleHandle = async () => {
    console.log('toggleHandle', mascot);
    if (!mascot.favourite) {
      setIsLiked(true);
      await toggleFavourites(mascot);
      getMascots();
    } else {
      setIsLiked(false);
      await toggleFavourites(mascot);
      getMascots();
    }
  };

  return (
    <View style={styles.background}>
      <Icon
        style={{ marginTop: 10 }}
        name="up"
        type="antdesign"
        color="white"
      />
      <View style={styles.top}>
        {/* <TouchableOpacity onPress={toggleHandle}>
          {isLiked ? (
            <Icon name="heart" type="antdesign" color="red" />
          ) : (
            <Icon name="hearto" type="antdesign" color="red" />
          )}
        </TouchableOpacity> */}
        <Text style={[styles.heading, styles.name]}>{mascot.name}</Text>
        <Text style={[styles.japanese, styles.heading]}>{mascot.japanese}</Text>
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 10,
        }}
      >
        <Image
          style={styles.mascotImage}
          source={{
            uri: mascot.picture,
          }}
        />
      </View>
      <ScrollView style={styles.mascotAbout}>
        <View style={styles.mascotText}>
          <Text style={{ lineHeight: 25, fontSize: 18 }}>
            {'\n'} Representing: {mascot.mascot}
            {'\n'} City: {mascot.city}
            {'\n'} Prefecture: {mascot.prefecture}
            {'\n'} Description: {mascot.description}{' '}
          </Text>
          {!mascot.officialSite ? (
            <Text style={{ textAlign: 'center' }}>🌸</Text>
          ) : (
            <Button
              title="Go to Offical Site"
              onPress={() => handleOpenWithWebBrowser()}
            />
          )}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    marginTop: 10,
    marginLeft: 30,
    color: 'white',
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
    zIndex: 0,
    height: '100%',
  },
  mascotImage: {
    marginTop: 20,
    height: 250,
    width: 250,
    resizeMode: 'contain',
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 50,
    backgroundColor: 'white',
  },
  mascotText: { margin: 30, marginTop: 40 },
  mascotAbout: {
    backgroundColor: 'white',
    zIndex: 5,
    flex: 2,
    marginTop: -50,
    borderTopStartRadius: 30,
    borderTopEndRadius: 30,
  },
});

export default MascotDetails;
