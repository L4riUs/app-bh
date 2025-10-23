import { Text, YStack } from "tamagui";
import { useTheme } from "@state/themeContext"
export default function Statistics() {
    const { theme } = useTheme();
    return (
        <YStack backgroundColor={theme == "dark" ? "$black4" : "$white3"} flex={1}>
            <Text>Statistics</Text>
        </YStack>
    );
}