import { TamaguiProvider, Theme, useTheme as useTamaguiTheme } from 'tamagui'
import { PortalProvider } from "@tamagui/portal"
import config from '../tamagui.config'
import { Stack } from "expo-router"
import ThemeProvider from "../src/core/theme/ThemeProvider"
import { useTheme } from "../src/state/themeContext"
import { StatusBar } from 'react-native'
import { useState } from "react"
import SplashScreen from '../src/components/ui/SplashScreen'
function ThemedStack() {
    const { theme } = useTheme();
    const tamaguiTheme = useTamaguiTheme()
    return (
        <Stack screenOptions={{ 
            headerStyle: {  backgroundColor: theme == "dark" ? tamaguiTheme.black1?.val : tamaguiTheme.white3?.val },
            headerTintColor: tamaguiTheme.color?.val
        }}>
            <Stack.Screen name="index" options={{ headerShown: false }} />
        </Stack>
    )
}

function ThemeWrapper({ children }: { children: React.ReactNode }) {
    const { theme } = useTheme();
    return (
        <>
            <StatusBar barStyle={theme === 'light' ? 'dark-content' : 'light-content'} />
            <Theme name={theme}>
                {children}
            </Theme>
        </>
    );
}

export default function Layout() {
    const [isLoaded, setIsLoaded] = useState(false);

    if (!isLoaded) {
        return (
            <SplashScreen onfinnish={isCancelled => !isCancelled && setIsLoaded(true)}/>
        );
    }
    
    return (
        <TamaguiProvider config={config} defaultTheme="dark">
            <PortalProvider>
                <ThemeProvider>
                    <ThemeWrapper>
                        <ThemedStack />
                    </ThemeWrapper>
                </ThemeProvider>
            </PortalProvider>
        </TamaguiProvider>
    );
}