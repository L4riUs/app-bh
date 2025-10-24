import { SizableText, XStack, YStack, H4, H5, H6, Paragraph, Separator } from "tamagui";
import { Ellipsis } from "@tamagui/lucide-icons";
import { useTheme } from "@state/themeContext";

export default function ReservationCard() {
    const { theme } = useTheme()
    return (
        <YStack backgroundColor={theme == "dark" ? "$black3" : "$white5"} padding={20} borderRadius={15}>
            <XStack justifyContent="space-between">
                <YStack flexShrink={1}>
                    <XStack alignItems="center" gap={10}>
                        <H6>CLIENTE: MARÍA SILVA</H6>
                        <Ellipsis size={35} color="#ff6600" />
                    </XStack>

                    <XStack alignItems="center" gap={10}>
                        <H6 width={120}>PAQUETE:</H6>
                        <Paragraph flexShrink={1}>PAQUETE PRUEBA -5P (15$)</Paragraph>
                    </XStack>
                    <XStack alignItems="center" gap={10}>
                        <H6>RESERVACIÓN:</H6>
                        <Paragraph fontWeight="bold" flexShrink={1}>
                            11/11/2025 A LAS 6:30PM
                        </Paragraph>
                    </XStack>
                </YStack>
            </XStack>
            <Separator borderColor={theme == "dark" ? "$white10" : "#0002"} marginVertical={20} />
            <XStack alignItems="center" gap={10}>
                <H6>ESTADO:</H6>
                <Paragraph backgroundColor="#ff6600" padding={5} paddingVertical={1} borderRadius={5}>POR VERIFICAR</Paragraph>
            </XStack>
        </YStack>
    );
}