import { TamaguiProvider, Theme, Button, YStack, Text, H1, PortalProvider } from 'tamagui'
import config from './tamagui.config'
import { useState } from 'react'
import { StatusBar } from 'react-native'
import { SheetDemo } from "./otra"

export default function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  return (
    <TamaguiProvider config={config} defaultTheme='dark'>
      <PortalProvider>
        <Theme name={theme}>
          <StatusBar barStyle={theme === 'light' ? 'dark-content' : 'light-content'} />
          <YStack
            flex={1}
            alignItems="center"
            justifyContent="center"
            backgroundColor="$background"
            padding="$4"
            gap="$4"
          >
            <H1>¡Hola Tamagui!</H1>

            <Text fontSize="$5">
              Tema actual: {theme}
            </Text>

            <Button
              size="$4"
              theme="blue"
              animation="bouncy"
              onPress={() => setTheme(theme === 'light' ? 'dark' : 'light')}
              pressStyle={{ scale: 0.95 }}
            >
              Cambiar Tema
            </Button>

            <Button
              size="$4"
              theme="green"
              animation="lazy"
              pressStyle={{ scale: 0.9, opacity: 0.8 }}
              onPress={() => console.log('Pressed!')}
            >
              Botón con animación
            </Button>

            {/* <SheetDemo /> */}
          </YStack>
        </Theme>
      </PortalProvider>
    </TamaguiProvider>
  )
}