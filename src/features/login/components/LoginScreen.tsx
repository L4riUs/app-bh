import React from "react";
import { Dimensions } from "react-native";
import { YStack, Button, H3, Text } from "tamagui";
import Svg, { Polygon, } from "react-native-svg";
import { Image, Input } from "tamagui";
import { CircleArrowRight } from "@tamagui/lucide-icons";
const { width, height } = Dimensions.get("window");
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Link } from "expo-router";
import { useTheme } from "@state/themeContext"


export default function LoginScreen() {
    const { theme } = useTheme()
    return (

        <KeyboardAwareScrollView
            contentContainerStyle={{ flexGrow: 1 }}
            resetScrollToCoords={{ x: 0, y: 0 }}
            scrollEnabled={true}
            keyboardShouldPersistTaps="handled"
            enableOnAndroid={true}
            extraScrollHeight={20}
        >
            <YStack
                minHeight={height}
                backgroundColor="$background"
                alignItems="center"
                justifyContent="center"
                position="relative"
                overflow="hidden"
            >
                <Svg
                    width={width}
                    height={height}
                    style={{ position: "absolute", top: 0, left: 0 }}
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                >
                    <Polygon points="100,87 30,100 100,100" fill="#fbeae0" />
                    <Polygon points="0,83 0,100 90,100" fill="#ff6600" />
                </Svg>

                <YStack width="75%" alignItems="center" gap="$4">
                    <YStack alignItems="center" marginBottom="$2">
                        <Image
                            source={require("@assets/bh_logo.png")}
                            width={180}
                            height={200}
                        />
                    </YStack>

                    <H3 color="#ff6600" fontWeight={"900"}>
                        INICIAR SESIÓN
                    </H3>

                    <Input
                        placeholder="Usuario"
                        borderRadius={10}
                        width="100%"
                        marginTop="$2"
                    />
                    <Input
                        placeholder="Contraseña"
                        secureTextEntry
                        borderRadius={10}
                        width="100%"
                        marginTop="$2"
                    />
                    <Link asChild href="/home" >
                        <Button
                            backgroundColor="#ff6600"
                            color="white"
                            width="100%"
                            marginTop="$4"
                            borderRadius={10}
                            fontWeight="bold"
                            animation="bouncy"
                        >
                            <CircleArrowRight size={24} color="white" />
                            INGRESAR
                        </Button>
                    </Link>

                    <Text color={theme == "dark" ? "$white2" : "$black2"} fontSize={16} marginTop="$3">
                        ¿Olvidaste tu contraseña?
                    </Text>
                </YStack>
            </YStack>
        </KeyboardAwareScrollView>

    );
}