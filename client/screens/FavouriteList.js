import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FavouriteList = () => {
  return (
    <View style={styles.background}>
      <Text>Favourites</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: 'pink',
    marginTop: 30,
  },
});
export default FavouriteList;
