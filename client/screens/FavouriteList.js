import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';

const FavouriteList = ({ navigation, favourites }) => {
  return (
    <View style={styles.background}>
      <Text>Favourites</Text>
      {favourites.length < 1 ? (
        <Text>No Favourites... </Text>
      ) : (
        <View>
          <FlatList
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            data={favourites}
            keyExtractor={(item) => item._id}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() =>
                  navigation.push('MascotDetails', { mascot: item })
                }
              >
                <Text>{item.name}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      )}
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
