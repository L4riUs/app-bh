import OrderCard from "./OrderCard"
import { YStack, XStack, Input, Button } from "tamagui"
import { Plus, Filter } from "@tamagui/lucide-icons"
export default function OrderTabs_Local() {
  return (
    <YStack>
       <XStack gap={10} marginBottom={30} alignItems="center">
          <Input
            placeholder="Buscar..."
            flex={1}
          />
          <Button backgroundColor="#ff6600" animation="bouncy" borderRadius={50} width={50} height={50}>
            <Plus />
          </Button>
          <Button backgroundColor="#ff6600" animation="bouncy" borderRadius={50} width={50} height={50}>
            <Filter />
          </Button>
        </XStack>
      <OrderCard/>
    </YStack>
  )
}

