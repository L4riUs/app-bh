import { SizableText, XStack, YStack, H4, H6, Paragraph, Separator, Card } from "tamagui";
import { Ellipsis } from "@tamagui/lucide-icons";
import ProgressBar from "@components/ui/Progress";
import { useTheme } from "@state/themeContext";

export default function OrderCard() {
    const { theme } = useTheme()
    return (
        <Card backgroundColor={theme == "dark" ? "$black6" : "$white5"}  padding={20} borderRadius={15}>
            <YStack>
                <XStack justifyContent="space-between">
                    <YStack>
                        <XStack alignItems="center" gap={10}>
                            <H4 fontSize={20}>NRO</H4>
                            <Paragraph backgroundColor="#ff6600" padding={5} paddingVertical={1} borderRadius={5}>05454545</Paragraph>
                        </XStack>

                        <XStack alignItems="center" gap={10}>
                            <H6 fontSize={20}>CLIENTE</H6>
                            <Paragraph>JAAIME VARDY</Paragraph>
                        </XStack>
                    </YStack>
                    <YStack alignItems="flex-end">
                        <Ellipsis size={35} />
                        <Paragraph fontSize={12}>10/25/2025</Paragraph>
                    </YStack>
                </XStack>
                <Separator borderColor={theme == "dark" ? "$white10" : "#0002"} marginVertical={20} />
                <ProgressBar title="En cocina" />
            </YStack>
        </Card>
    );
} 