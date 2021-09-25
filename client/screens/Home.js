import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

import DropDownPicker from 'react-native-dropdown-picker';
import MascotList from '../components/MascotList';

const Home = ({ navigation, mascots, filteredMascots, setFilteredMascots }) => {
  const [searchParam, setSearch] = useState('');
  const [filterParam, setFilter] = useState(null);
  const [filterItems, setFilterItems] = useState([
    { label: 'Name', value: 'name' },
    { label: 'Japanese', value: 'japanese' },
    { label: 'City', value: 'city' },
    { label: 'Prefecture', value: 'prefecture' },
  ]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
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
  }, [searchParam]);

  return (
    <View style={styles.list}>
      {mascots.length < 1 ? (
        <Text></Text>
      ) : (
        <View>
          <Text>Yuru Chara Search</Text>
          <DropDownPicker
            style={styles.filter}
            open={open}
            value={filterParam}
            items={filterItems}
            setOpen={setOpen}
            setItems={setFilterItems}
            setValue={setFilter}
            placeholder="   Filter"
          />
          <TextInput
            style={styles.textInput}
            onChangeText={setSearch}
            placeholder="Search "
            value={searchParam}
          />
          <MascotList
            navigation={navigation}
            filteredMascots={filteredMascots}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    paddingTop: 30,
    backgroundColor: '#edc4b4',
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
    backgroundColor: 'white',
    borderRadius: 30,
  },
  filter: {
    borderRadius: 30,
    marginLeft: 5,
    marginRight: 5,
  },
});

export default Home;
