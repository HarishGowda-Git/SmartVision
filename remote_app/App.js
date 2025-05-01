import React, { useEffect } from 'react';
import { 
  StyleSheet, 
  View, 
  Text, 
  Animated, 
  Dimensions, 
  Easing, 
  Image,
  TouchableOpacity
} from 'react-native';

const { width, height } = Dimensions.get('window');

export default function App() {
  // Create animated values for rotation
  const blueRotation = new Animated.Value(0);
  const pinkRotation = new Animated.Value(0);
  const yellowRotation = new Animated.Value(0);
  const greenRotation = new Animated.Value(0);

  useEffect(() => {
    // Animation for blue shape
    Animated.loop(
      Animated.timing(blueRotation, {
        toValue: 1,
        duration: 12000,
        easing: Easing.linear,
        useNativeDriver: true
      })
    ).start();

    // Animation for pink shape
    Animated.loop(
      Animated.timing(pinkRotation, {
        toValue: 1,
        duration: 15000,
        easing: Easing.linear,
        useNativeDriver: true
      })
    ).start();

    // Animation for yellow shape
    Animated.loop(
      Animated.timing(yellowRotation, {
        toValue: 1,
        duration: 10000,
        easing: Easing.linear,
        useNativeDriver: true
      })
    ).start();

    // Animation for green button's subtle rotation
    Animated.loop(
      Animated.timing(greenRotation, {
        toValue: 1,
        duration: 8000,
        easing: Easing.linear,
        useNativeDriver: true
      })
    ).start();
  }, []);

  // Interpolate rotation values
  const blueRotateInterpolate = blueRotation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg']
  });

  const pinkRotateInterpolate = pinkRotation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg']
  });

  const yellowRotateInterpolate = yellowRotation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg']
  });

  const greenRotateInterpolate = greenRotation.interpolate({
    inputRange: [0, 1],
    outputRange: ['-5deg', '5deg']
  });

  return (
    <View style={styles.container}>
      {/* Background animated shapes */}
      <Animated.View 
        style={[
          styles.blueShape, 
          { transform: [{ rotate: blueRotateInterpolate }] }
        ]} 
      />
      <Animated.View 
        style={[
          styles.pinkShape, 
          { transform: [{ rotate: pinkRotateInterpolate }] }
        ]} 
      />
      <Animated.View 
        style={[
          styles.yellowShape, 
          { transform: [{ rotate: yellowRotateInterpolate }] }
        ]} 
      />
      
      {/* Image icon */}
      <View style={styles.imageContainer}>
        <View style={styles.imageFrame}>
          <View style={styles.yellowDot} />
          <View style={styles.blueWave} />
        </View>
      </View>
      
      {/* Bottom Button */}
      <Animated.View 
        style={[
          styles.buttonContainer,
          { transform: [{ rotate: greenRotateInterpolate }] }
        ]}
      >
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Let's</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  blueShape: {
    position: 'absolute',
    width: width * 0.5,
    height: width * 0.5,
    backgroundColor: '#80C9FF',
    borderRadius: width * 0.1,
    top: -width * 0.1,
    right: -width * 0.1,
    transform: [{ rotate: '45deg' }],
  },
  pinkShape: {
    position: 'absolute',
    width: width * 0.6,
    height: width * 0.6,
    backgroundColor: '#FF9D9D',
    borderRadius: width * 0.3,
    bottom: 0,
    left: -width * 0.2,
  },
  yellowShape: {
    position: 'absolute',
    width: width * 0.25,
    height: width * 0.25,
    backgroundColor: '#FFE082',
    borderRadius: width * 0.05,
    right: width * 0.1,
    bottom: width * 0.2,
    transform: [{ rotate: '30deg' }],
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageFrame: {
    width: 70,
    height: 70,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#000',
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  yellowDot: {
    position: 'absolute',
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#FFD700',
    top: 10,
    left: 10,
  },
  blueWave: {
    position: 'absolute',
    width: 100,
    height: 40,
    backgroundColor: '#4B89DC',
    borderRadius: 20,
    bottom: -10,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 40,
  },
  button: {
    backgroundColor: '#4CD964',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 25,
  },
  buttonText: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
  },
});