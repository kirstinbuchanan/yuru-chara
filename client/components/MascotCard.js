import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

const MascotCard = ({ name, mascot }) => {
  return (
    <View style={styles.box}>
      <Image
        style={styles.image}
        source={{
          uri: mascot.picture,
        }}
      />
      <Text style={styles.text}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    padding: 10,
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 1,
    elevation: 2,
    borderColor: 'pink',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 30,
    backgroundColor: 'white',
  },
  image: { height: 300, width: 400, resizeMode: 'contain' },
  text: {
    fontWeight: 'bold',
    color: 'black',
  },
});
export default MascotCard;
