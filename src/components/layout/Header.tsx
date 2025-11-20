import { XStack, Image, Button } from 'tamagui'
import { Bell, Moon, Sun } from "@tamagui/lucide-icons"
import { useTheme } from '@state/themeContext'


function BtnDarkMode() {
    const { toggleTheme, theme } = useTheme()
    if (theme == "dark") {
        return <Moon size={25} onPress={toggleTheme} />
    } else {
        return <Sun size={25} onPress={toggleTheme} />
    }
}
export default function Header() {
    return (
        <XStack alignItems='center' gap={10}>
            <Bell size={25} />
            <BtnDarkMode />
            <Image source={require("@assets/1.jpg")} width={35} height={35} borderRadius={50} />
        </XStack>
    )
}