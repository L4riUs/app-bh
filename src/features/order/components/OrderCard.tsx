import { SizableText, XStack, YStack, H4, H6, Paragraph, Separator } from "tamagui";
import { Ellipsis } from "@tamagui/lucide-icons";
import ProgressBar from "@components/ui/Progress";
import { useTheme } from "@state/themeContext";

export default function OrderCard() {
    const { theme } = useTheme()
    return (
        <YStack backgroundColor={theme == "dark" ? "$black3" : "$white5"} padding={20} borderRadius={15}>
            <XStack justifyContent="space-between">
                <YStack>
                    <XStack alignItems="center" gap={10}>
                        <H4>NRO</H4>
                        <Paragraph backgroundColor="#ff6600" padding={5} paddingVertical={1} borderRadius={5}>05454545</Paragraph>
                    </XStack>

                    <XStack alignItems="flex-end" gap={10}>
                        <H6>CLIENTE</H6>
                        <Paragraph>JAAIME VARDY</Paragraph>
                    </XStack>
                </YStack>
                <YStack alignItems="flex-end">
                    <Ellipsis size={35} />
                    <Paragraph>10/25/2025</Paragraph>
                </YStack>
            </XStack>
            <Separator borderColor={theme == "dark" ? "$white10" : "#0002"} marginVertical={20} />
            <ProgressBar title="En cocina"/>
        </YStack>
    );
} 