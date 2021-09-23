import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  TextInput,
} from 'react-native';
import Mascot from '../components/mascot.card';

const Home = ({ navigation, mascots }) => {
  return (
    <View style={styles.list}>
      <TextInput style={styles.textInput} placeholder="Search..." />
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
