import React, { useEffect, useState } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import Home from './screens/Home';
import MascotDetails from './screens/MascotDetails';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  const [mascots, setMascots] = useState([]);

  async function handleFetchMascots() {
    const result = await fetch('http://10.10.22.184:4000/mascots')
      .then((response) => response.json())
      .catch((err) => {
        console.log(err);
      });

    setMascots(result);
  }

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
