import ClientCard from "./ClientCard"
import { YStack, XStack, Input, Button } from "tamagui"
import { Plus, } from "@tamagui/lucide-icons"
export default function OrderTabs_Llevar() {
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

      </XStack>
    </YStack>
  )
}