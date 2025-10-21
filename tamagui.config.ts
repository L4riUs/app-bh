import { defaultConfig } from '@tamagui/config/v4'
import { createAnimations } from '@tamagui/animations-react-native'
import { createTamagui } from 'tamagui'
import { shorthands } from '@tamagui/shorthands'

const animations = createAnimations({
  bouncy: {
    type: 'spring',
    damping: 10,
    mass: 0.9,
    stiffness: 100,
  },
  lazy: {
    type: 'spring',
    damping: 20,
    stiffness: 60,
  },
  quick: {
    type: 'spring',
    damping: 20,
    mass: 1.2,
    stiffness: 250,
  },
  smooth: {
    type: 'timing',
    duration: 300,
  },
})

const tamaguiConfig = createTamagui({
  ...defaultConfig,
  animations,
  shorthands
})

export default tamaguiConfig