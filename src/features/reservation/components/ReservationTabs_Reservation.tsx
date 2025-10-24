import ReservationCard from "@features/reservation/components/ReservationCard"
import CalendarCustom from "@ui/CalendarCustom"
import { YStack, XStack, Input, ScrollView } from "tamagui"
export default function ReservationTabs_Reservation() {
  return (
    <YStack>
          <YStack gap={25}>
            <CalendarCustom />
          </YStack>
    </YStack>
  )
}
