import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const favourites = [
  {
    _id: '614df1d3c139bb06a7003e03',
    name: 'Marimokkori',
    japanese: 'まりもっこり',
    mascot: 'Hokkaido Prefecture',
    prefecture: 'Hokkaido',
    description:
      "The name 'Marimokkori' is a portmanteau: marimo is the word for the green algae clusters that grow in some of Hokkaidō's lakes, while mokkori, literally 'bulge', is a Japanese slang term for an erection.",
    officialSite: 'https://ameblo.jp/marimokkori2005/',
    picture:
      'https://res.cloudinary.com/dygjcgbh3/image/upload/v1632395128/images/marimokkori/1.jpg',
  },
];

const FavouriteList = ({ navigation, removeFavourite }) => {
  return (
    <View style={styles.background}>
      <Text>Favourites</Text>
      {favourites.length < 1 ? (
        <Text>No Favourites... </Text>
      ) : (
        <View>
          <Text>{favourites[0].name}</Text>
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
