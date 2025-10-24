import DeliveryCard from '@features/delivery/components/DeliveryCard'
import { YStack, ScrollView, Input } from 'tamagui'
export default function DeliveryTabs_Available() {
  return (
    <YStack>
      <ScrollView gap={25}>
        <YStack gap={25}>
          <Input placeholder="Buscar..." flex={1} />
          <DeliveryCard />
          <DeliveryCard />
          <DeliveryCard />
        </YStack>
      </ScrollView>
    </YStack>
  )
}
