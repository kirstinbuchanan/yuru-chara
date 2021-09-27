import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import DropDownPicker from 'react-native-dropdown-picker';
import MascotList from '../components/MascotList';
import { Icon } from 'react-native-elements';

const Home = ({ navigation, mascots, favourites }) => {
  const [searchParam, setSearch] = useState('');
  const [filterParam, setFilter] = useState(null);
  const [filterItems, setFilterItems] = useState([
    { label: '   Name', value: 'name' },
    { label: '   Japanese', value: 'japanese' },
    { label: '   City', value: 'city' },
    { label: '   Prefecture', value: 'prefecture' },
  ]);
  const [open, setOpen] = useState(false);

  const filterMascots = () => {
    if (!searchParam || !filterParam) {
      return mascots;
    } else {
      return mascots.filter((mascot) => {
        return mascot[filterParam]
          ?.toLowerCase()
          .startsWith(searchParam.toLowerCase());
      });
    }
  };

  const filteredMascots = filterMascots();

  return (
    <View style={styles.list}>
      <View style={styles.headerBar}>
        <Text style={styles.headingText}>Yuru Chara Search</Text>
        <TouchableOpacity
          style={styles.heart}
          onPress={() => navigation.navigate('AddNewMascot')}
        >
          <Icon name="add" type="ionicons" color="red" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.heart}
          onPress={() => navigation.navigate('FavouriteList')}
        >
          <Icon name="heart" type="antdesign" color="red" />
        </TouchableOpacity>
      </View>
      <View style={styles.filter}>
        <DropDownPicker
          dropDownContainerStyle={{
            borderColor: 'white',
          }}
          style={styles.dropdown}
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
          placeholder="Search"
          value={searchParam}
          placeholderTextColor={'black'}
        />
      </View>
      {filteredMascots.length < 1 ? (
        <Text
          style={{
            backgroundColor: '#ffe5d9',
            height: 490,
            color: 'white',
            textAlign: 'center',
            fontSize: 20,
            fontWeight: '500',
            marginTop: 20,
          }}
        >
          {' '}
          No Mascots Found...
        </Text>
      ) : (
        <View style={styles.test}>
          <MascotList
            style={styles.mascotList}
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
    backgroundColor: '#ffe5d9',
    paddingBottom: 200,
  },
  headerBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    zIndex: 2,
  },
  heart: {
    top: 5,
  },
  headingText: {
    color: 'white',
    fontSize: 30,
    marginLeft: 10,
    fontWeight: 'bold',
  },
  text: {
    color: 'black',
    fontSize: 16,
  },
  filter: {
    borderRadius: 30,
    margin: 10,
    zIndex: 1,
  },
  textInput: {
    height: 50,
    backgroundColor: 'white',
    borderRadius: 30,
    marginTop: 10,
    paddingLeft: 20,
  },
  dropdown: {
    borderRadius: 30,
    borderWidth: 0,
  },
  mascotList: {},
  test: {
    height: 470,
  },
});

export default Home;
