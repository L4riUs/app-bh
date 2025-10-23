import OrderCard from "./OrderCard"
import { YStack, XStack, Input, Button } from "tamagui"
import { Plus, Filter } from "@tamagui/lucide-icons"
export default function OrderTabs_Reservation() {
  return (
    <YStack>
      <XStack gap={10} marginBottom={30}>
        <Input
          placeholder="Buscar..."
          flex={1}
        />
        <Button backgroundColor="#ff6600" animation="bouncy">
          <Plus />
        </Button>
        <Button backgroundColor="#ff6600" animation="bouncy">
          <Filter />
        </Button>
      </XStack>
      <OrderCard/>
    </YStack>
  )
}
