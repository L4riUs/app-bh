import SaleGraphic from "./StatisticsSale"
import StatisticsIncome from "./StatisticsIncome"
import StatisticsAverage from "./StatisticsAverage"
import StatisticsBestProduct from "./StatisticsBestProduct"
import BannerTitle from "@components/layout/BannerTitle"
import { YStack, ScrollView } from "tamagui"
import { useTheme } from "@state/themeContext"

export default function StatisticsScreen() {
    const { theme } = useTheme();
    return (
        <ScrollView>
            <YStack backgroundColor={theme == "dark" ? "$black4" : "$white3"} flex={1}>
                <BannerTitle title="ESTADISTICAS" />
                <SaleGraphic />
                <StatisticsIncome />
                <StatisticsAverage />
                <StatisticsBestProduct />
            </YStack>
        </ScrollView>
    )
}