import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MascotList from '../components/MascotList';

const FavouriteList = ({ navigation, favourites }) => {
  return (
    <View style={styles.background}>
      <View style={styles.header}>
        <Text style={styles.heading}>Favourites</Text>
      </View>
      {favourites.length < 1 ? (
        <Text
          style={{
            backgroundColor: 'pink',
            height: 580,
            color: 'white',
            textAlign: 'center',
            fontSize: 20,
            fontWeight: '500',
            marginTop: 20,
          }}
        >
          No Favourites...{' '}
        </Text>
      ) : (
        <View style={styles.test}>
          <MascotList filteredMascots={favourites} navigation={navigation} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#e8b4b8',
  },
  heading: {
    color: 'white',
    fontSize: 30,
    marginLeft: 20,
    fontWeight: 'bold',
    paddingTop: 20,
  },
  test: {
    height: 580,
  },
});
export default FavouriteList;
