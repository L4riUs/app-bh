import ReservationCard from "./ReservationCard"
import { YStack, XStack, Input, Button, ScrollView } from "tamagui"
export default function ReservationTabs_Schedule() {
  return (
    <ScrollView>
      <YStack gap={25}>
       <ReservationCard/>
       <ReservationCard/>
       <ReservationCard/>
       <ReservationCard/>
      </YStack>
    </ScrollView>
  )
}