import { useState } from 'react'
import { Text, Tabs, YStack } from 'tamagui'
import { ReactNode } from 'react'
import { useTheme } from '@state/themeContext'

export default function ReservationTabs({
  Content1,
  Content2,
  Content3,
}: {
  Content1: ReactNode
  Content2: ReactNode
  Content3: ReactNode
}) {
  const [value, setValue] = useState('tab1')
  const { theme } = useTheme()

  const tabBg = (v: string) =>
    value === v ? 'red' : theme === 'dark' ? '$black7' : '$white6'
  const textColor = (v: string) =>
    value === v ? (theme == 'dark' ? '$white6' : '$black6') : '#888'

  return (
    <Tabs
      value={value}
      onValueChange={setValue}
      width="100%"
      flex={1}
      flexDirection="column"
    >
      <Tabs.List
        padding="$4"
        backgroundColor="transparent"
        borderBottomWidth={0}
        scrollable
        space="$3"
        gap="$3"
      >
        <Tabs.Tab
          value="tab1"
          unstyled
          backgroundColor={tabBg('tab1')}
          borderRadius="$10"
          paddingHorizontal="$5"
          paddingVertical="$3"
        >
          <Text color={textColor('tab1')} fontWeight="600" fontSize="$4">
            DISPONIBLES
          </Text>
        </Tabs.Tab>

        <Tabs.Tab
          value="tab2"
          unstyled
          backgroundColor={tabBg('tab2')}
          borderRadius="$10"
          paddingHorizontal="$5"
          paddingVertical="$3"
        >
          <Text color={textColor('tab2')} fontWeight="600" fontSize="$4">
            PENDIENTES
          </Text>
        </Tabs.Tab>

        <Tabs.Tab
          value="tab3"
          unstyled
          backgroundColor={tabBg('tab3')}
          borderRadius="$10"
          paddingHorizontal="$5"
          paddingVertical="$3"
        >
          <Text color={textColor('tab3')} fontWeight="600" fontSize="$4">
            ENTREGADOS
          </Text>
        </Tabs.Tab>
      </Tabs.List>

      <YStack flex={1} padding="$4">
        {value === 'tab1' && <YStack flex={1}>{Content1}</YStack>}
        {value === 'tab2' && <YStack flex={1}>{Content2}</YStack>}
        {value === 'tab3' && <YStack flex={1}>{Content3}</YStack>}
      </YStack>
    </Tabs>
  )
}
