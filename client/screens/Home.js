import React, { setState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import Mascot from '../components/mascot.card';

const Home = ({ navigation, mascots }) => {
  const [search, SetSearch] = setState('');

  return (
    <View style={styles.list}>
      <SearchBar
        placeholder="Type Here..."
        onChangeText={SetSearch}
        value={search}
      />
      {mascots.length < 1 ? (
        <Text>loading...</Text>
      ) : (
        <FlatList
          data={mascots}
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
});

export default Home;
