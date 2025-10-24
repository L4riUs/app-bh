import {
  SizableText,
  XStack,
  YStack,
  Stack,
  Button,
  H6,
  Paragraph,
  Separator,
} from 'tamagui'
import { Ellipsis } from '@tamagui/lucide-icons'
import { useTheme } from '@state/themeContext'

export default function DeliveryCard() {
  const { theme } = useTheme()
  return (
    <YStack
      backgroundColor={theme == 'dark' ? '$black3' : '$white5'}
      padding={20}
      borderRadius={15}
    >
      <XStack justifyContent="space-between">
        <YStack flexShrink={1}>
          <XStack justifyContent="space-between" gap={10}>
            <Stack flexDirection="row" alignItems="center">
              <H6>NRO: </H6>
              <Paragraph
                backgroundColor="#ff6600"
                fontWeight="bold"
                padding={5}
                paddingVertical={1}
                borderRadius={5}
              >
                025467
              </Paragraph>
            </Stack>
            <Paragraph
              fontWeight="bold"
              flexShrink={1}
              textAlign="right"
              marginStart={80}
            >
              11/11/2025 {'\n'} 6:30PM
            </Paragraph>
          </XStack>
          <XStack alignItems="center" gap={10}>
            <H6 width={120}>CLIENTE:</H6>
            <Paragraph flexShrink={1}>MARÍA SILVA</Paragraph>
          </XStack>
          <XStack alignItems="center" gap={10}>
            <H6>CONTACTO:</H6>
            <Paragraph fontWeight="bold" flexShrink={1}>
              +584260563224
            </Paragraph>
          </XStack>
        </YStack>
      </XStack>
      <Separator
        borderColor={theme == 'dark' ? '$white10' : '#0002'}
        marginVertical={20}
      />
      <XStack space="$3" marginTop="$4">
        <Button
          flex={1}
          backgroundColor="#ff6600"
          color="white"
          fontWeight="bold"
          borderRadius={15}
          pressStyle={{ opacity: 0.8 }}
        >
          ACEPTAR ENTREGA
        </Button>
        <Button
          flex={1}
          backgroundColor="$grey-100"
          color="$color"
          fontWeight="bold"
          borderRadius={15}
          pressStyle={{ opacity: 0.8 }}
        >
          DETALLES
        </Button>
      </XStack>
    </YStack>
  )
}
