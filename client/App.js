import React, { useEffect, useState } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import Home from './screens/Home';
import MascotDetails from './screens/MascotDetails';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  const [mascots, setMascots] = useState([]);
  const [filteredMascots, setFilteredMascots] = useState(mascots);

  async function handleFetchMascots() {
    const result = await fetch('http://10.10.22.184:4000/mascots')
      .then((response) => response.json())
      .catch((err) => {
        console.log(err);
      });

    const filtered = result.sort((a, b) => {
      var nameA = a.name.toUpperCase();
      var nameB = b.name.toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }

      return 0;
    });
    console.log(filtered);
    setMascots(filtered);
  }

  const searchFilter = (e) => {
    const keyword = e.target.value;

    if (keyword !== '') {
      const results = mascots.filter((mascot) => {
        return mascot.name.toLowerCase().startsWith(keyword.toLowerCase());
      });
      setFilteredMascots(results);
    } else {
      setFilteredMascots(mascots);
    }

    setMascots(mascots);
  };

  useEffect(() => {
    handleFetchMascots();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home">
          {(props) => <Home mascots={mascots} {...props} />}
        </Stack.Screen>
        <Stack.Screen name="MascotDetails" component={MascotDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
