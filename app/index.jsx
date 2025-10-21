import { YStack, H1, Text, Button, ScrollView } from "tamagui";
// import { useTheme } from "../src/state/themeContext";
import LoginScreen from "../src/features/login/components/login";

export default function HomeScreen() {
  // const { theme, toggleTheme } = useTheme();
  return (
    // <YStack
    //   flex={1}
    //   alignItems="center"
    //   justifyContent="center"
    //   backgroundColor="$background"
    //   padding="$4"
    //   gap="$4"
    // >
    //   <H1>¡Hola Tamagui!</H1>
    //   <Text fontSize="$5">Tema actual: {theme}</Text>
    //   <Button
    //     size="$4"
    //     theme="blue"
    //     animation="bouncy"
    //     pressStyle={{ scale: 0.95 }}
    //     onPress={toggleTheme}
    //   >
    //     Cambiar Tema
    //   </Button>
    // </YStack>
    <LoginScreen />
  );
}
