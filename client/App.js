import React, { useEffect, useState } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import Home from './screens/Home';
import MascotDetails from './screens/MascotDetails';
import { createStackNavigator } from '@react-navigation/stack';
import { fetchMascots } from './ApiClientService';
import FavouriteList from './screens/FavouriteList';
import YuruChara from './splashscreens/YuruChara';
import AddNewMascot from './screens/AddMascotModal';

const Stack = createStackNavigator();

export default function App() {
  const [mascots, setMascots] = useState([]);

  const [favourites, setFavourites] = useState([]);

  const [isLiked, setIsLiked] = useState(false);

  async function getMascots() {
    const result = await fetchMascots();

    const faves = result.filter((mascot) => mascot.favourite);

    setFavourites(faves);

    console.log('faves', faves);

    const sorted = result.sort((a, b) => {
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
    setMascots(sorted);
  }

  useEffect(() => {
    getMascots();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          presentation: 'modal',
        }}
      >
        <Stack.Screen
          name="YuruChara"
          component={YuruChara}
          options={{
            animationEnabled: false,
          }}
        />
        <Stack.Screen
          name="Home"
          options={{
            animationEnabled: false,
          }}
        >
          {(props) => <Home mascots={mascots} {...props} />}
        </Stack.Screen>
        <Stack.Screen name="AddNewMascot" options={{ headerShown: false }}>
          {(props) => <AddNewMascot getMascots={getMascots} {...props} />}
        </Stack.Screen>
        <Stack.Screen name="MascotDetails">
          {(props) => (
            <MascotDetails
              mascots={mascots}
              getMascots={getMascots}
              setFavourites={setFavourites}
              isLiked={isLiked}
              setIsLiked={setIsLiked}
              {...props}
            />
          )}
        </Stack.Screen>
        <Stack.Screen name="FavouriteList">
          {(props) => (
            <FavouriteList
              getMascots={getMascots}
              mascots={mascots}
              favourites={favourites}
              isLiked={isLiked}
              setIsLiked={setIsLiked}
              {...props}
            />
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
