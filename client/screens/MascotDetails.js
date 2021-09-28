import React, { useState } from 'react';
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

const MascotDetails = ({ route, mascots, getMascots }) => {
  const { mascot } = route.params;

  const [isLiked, setIsLiked] = useState(mascot.favourite);

  const handleOpenWithWebBrowser = () => {
    WebBrowser.openBrowserAsync(mascot.officialSite);
  };

  const toggleHandle = async () => {
    if (!mascot.favourite) {
      setIsLiked(true);
      await toggleFavourites(mascot._id, { favourite: true });
      getMascots();
    } else {
      setIsLiked(false);
      await toggleFavourites(mascot._id, { favourite: false });
      getMascots();
    }
  };

  return (
    <View style={[styles.background]}>
      <Icon
        style={{ marginTop: 20 }}
        name="down"
        type="antdesign"
        color="white"
      />
      <View style={{ justifyContent: 'space-between' }}>
        <Text style={[styles.heading, styles.name]}>{mascot.name}</Text>
        <Text style={[styles.japanese, styles.heading]}>{mascot.japanese}</Text>
        <TouchableOpacity
          style={{ alignSelf: 'flex-end', marginRight: 30, marginTop: -30 }}
          onPress={toggleHandle}
        >
          {isLiked ? (
            <Icon name="heart" type="antdesign" color="#900020" />
          ) : (
            <Icon name="hearto" type="antdesign" color="#900020" />
          )}
        </TouchableOpacity>
      </View>

      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 10,

          shadowColor: '#171717',
          shadowOffset: { width: -3, height: 4 },
          shadowOpacity: 0.2,
          shadowRadius: 5,
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
          <Text style={{ fontSize: 17, marginBottom: 5 }}>
            <Text style={styles.span}>Representing: </Text>
            {mascot.mascot}
          </Text>
          <Text style={{ fontSize: 17, marginBottom: 5 }}>
            <Text style={styles.span}>City:</Text> {mascot.city}
          </Text>
          <Text style={{ fontSize: 17, marginBottom: 5 }}>
            <Text style={styles.span}>Prefecture: </Text>
            {mascot.prefecture}
          </Text>
          <Text style={{ fontSize: 17, marginBottom: 5 }}>
            <Text style={styles.span}>Description:</Text> {mascot.description}
          </Text>
          {!mascot.officialSite ? (
            <Text style={{ textAlign: 'center' }}>🌸</Text>
          ) : (
            <TouchableOpacity
              onPress={() => handleOpenWithWebBrowser()}
              style={styles.buttonWrapper}
            >
              <View style={styles.button}>
                <Text style={styles.buttonText}>Go to Official Site</Text>
              </View>
            </TouchableOpacity>
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
    fontSize: 30,
    fontWeight: 'bold',
  },
  japanese: {
    fontSize: 20,
    fontWeight: '400',
  },
  background: {
    backgroundColor: '#e8b4b8',
    zIndex: 0,
    height: '100%',
  },
  mascotImage: {
    marginTop: 20,
    height: 250,
    width: 250,
    resizeMode: 'cover',
    borderColor: 'transparent',
    borderWidth: 1,
    borderRadius: 50,
    backgroundColor: 'white',
  },
  mascotText: {
    margin: 30,
    marginTop: 80,
  },
  mascotAbout: {
    backgroundColor: 'rgb(245,245,245)',
    zIndex: 5,
    flex: 2,
    marginTop: -50,
    borderTopStartRadius: 30,
    borderTopEndRadius: 30,
  },
  top: {
    zIndex: 10,
    alignSelf: 'flex-end',
    marginRight: 20,
  },
  span: {
    fontWeight: 'bold',
  },
  button: {
    height: 40,
    width: '50%',
    backgroundColor: '#e8b4b8',
    borderRadius: 20,
    justifyContent: 'center',
  },
  buttonWrapper: {
    height: 60,
    marginVertical: 15,
    alignItems: 'center',
  },
  buttonText: {
    color: '#3d3d3d',
    alignSelf: 'center',
    fontSize: 17,
  },
});

export default MascotDetails;
