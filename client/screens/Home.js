import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  TextInput,
} from 'react-native';
import Mascot from '../components/MascotCard';

const Home = ({ navigation, mascots, filteredMascots, setFilteredMascots }) => {
  const [searchParam, setSearch] = useState('');

  // const searchFilter = (e) => {

  // };

  useEffect(() => {
    // console.log('e', e);
    // setSearch(e);

    const keyword = searchParam;

    if (keyword !== '') {
      const results = mascots.filter((mascot) => {
        return mascot.name.toLowerCase().startsWith(keyword.toLowerCase());
      });
      // when it's filterd
      setFilteredMascots(results);
    } else {
      //when it's empty
      setFilteredMascots(mascots);
    }
    console.log('mascots', mascots, mascots.length);
    console.log('filteredMascots', filteredMascots, filteredMascots.length);
  }, [searchParam]);

  return (
    <View style={styles.list}>
      <TextInput
        style={styles.textInput}
        onChangeText={setSearch}
        placeholder="Search..."
        value={searchParam}
      />
      {mascots.length < 1 ? (
        <Text> Loading...</Text>
      ) : (
        <FlatList
          data={filteredMascots}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => navigation.push('MascotDetails', { mascot: item })}
            >
              <Mascot name={item.name} mascot={item} />
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    padding: 10,
    flex: 1,
  },
  text: {
    color: 'black',
    fontSize: 16,
    backgroundColor: 'pink',
  },
  textInput: {
    height: 40,
    borderWidth: 1,
    paddingLeft: 20,
    margin: 5,
    borderColor: 'black',
    backgroundColor: 'white',
  },
});

export default Home;
