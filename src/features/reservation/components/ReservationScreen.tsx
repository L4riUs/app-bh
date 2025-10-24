import ReservationTabs from "./ReservationTabs"
import ReservationTabs_Reservation from "./ReservationTabs_Reservation"
import ReservationTabs_Schedule from "./ReservationTabs_Schedule"
import BannerTitle from "@components/layout/BannerTitle"
import { YStack } from "tamagui"
import { useTheme } from "@state/themeContext"

export default function ReservationScreen() {
    const { theme } = useTheme()
    return (
        <YStack flex={1} backgroundColor={theme == "dark" ? "$black4" : "$white3"}>
            <BannerTitle title="RESERVACIONES" />
            <ReservationTabs
                Content1={<ReservationTabs_Reservation />}
                Content2={<ReservationTabs_Schedule />}
            />
        </YStack>
    )
}