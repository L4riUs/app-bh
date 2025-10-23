import { Text, YStack } from "tamagui";
import { useTheme } from "@state/themeContext"
export default function Order() {
    const { theme } = useTheme();
    return (
        <YStack backgroundColor={theme == "dark" ? "$black4" : "$white3"} flex={1}>
            <Text>Order</Text>
        </YStack>
    );
}