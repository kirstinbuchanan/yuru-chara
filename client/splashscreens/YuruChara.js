import React from 'react';
import { View, StyleSheet } from 'react-native';
import AnimatedLottieView from 'lottie-react-native';
const YuruChara = ({ navigation }) => {
  return (
    <View style={styles.container} animationEnabled={false}>
      <View style={styles.circle}>
        <AnimatedLottieView
          style={styles.fuji}
          source={require('../assets/19226-japon.json')}
          autoPlay
          loop={false}
          onAnimationFinish={() => navigation.navigate('Home')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    backgroundColor: '#e8b4b8',
  },
  circle: {
    backgroundColor: 'white',
    borderRadius: 200,
    height: 375,
    width: 375,
  },
  fuji: {
    top: -8,
    left: -5,
  },
});
export default YuruChara;
