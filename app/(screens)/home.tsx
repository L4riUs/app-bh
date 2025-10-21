import React from 'react'
import { View, Button, StyleSheet } from 'react-native'
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from 'react-native-reanimated'

export default function App() {
  const size = useSharedValue(100)

  const animatedStyle = useAnimatedStyle(() => ({
    width: size.value,
    height: size.value,
    backgroundColor: 'tomato',
    borderRadius: 20,
  }))

  const handlePress = () => {
    size.value = withSpring(size.value === 100 ? 200 : 100)
  }

  return (
    <View style={styles.container}>
      <Animated.View style={animatedStyle} />
      <View style={{ marginTop: 20 }}>
        <Button title="Animar" onPress={handlePress} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#222',
  },
})
