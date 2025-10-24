import DeliveryCard from './DeliveryCard'
import { YStack, XStack, Input, Button, ScrollView } from 'tamagui'
export default function DeliveryTabs_Delivered() {
  return (
    <ScrollView>
      <YStack gap={25}>
        <Input placeholder="Buscar..." flex={1} />
        <DeliveryCard />
        <DeliveryCard />
        <DeliveryCard />
        <DeliveryCard />
      </YStack>
    </ScrollView>
  )
}
