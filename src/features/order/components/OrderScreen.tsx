import OrderTabs from "./OrderTabs"
import OrderTabs_Delivery from "./OrderTabs_Delivery"
import OrderTabs_Llevar from "./OrderTabs_Llevar"
import OrderTabs_Local from "./OrderTabs_Local"
import OrderTabs_Reservation from "./OrderTabs_Reservation"
import BannerTitle from "@components/layout/BannerTitle"
import { YStack } from "tamagui"
import { useTheme } from "@state/themeContext"

export default function OrderScreen() {
    const { theme } = useTheme()
    return (
        <YStack flex={1} backgroundColor={theme == "dark" ? "$black4" : "$white3"}>
            <BannerTitle title="ORDENES" />
            <OrderTabs
                Content1={<OrderTabs_Delivery />}
                Content2={<OrderTabs_Local />}
                Content3={<OrderTabs_Llevar />}
                Content4={<OrderTabs_Reservation />}
            />
        </YStack>
    )
}