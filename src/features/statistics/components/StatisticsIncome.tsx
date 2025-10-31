import {useState} from 'react';
import { YStack, XStack, Paragraph, H5, View } from 'tamagui';
import { LineChart } from 'react-native-gifted-charts';
import { useTheme } from '@state/themeContext';
import Select from "@components/ui/Select"
export default function StatisticsIncome() {
    const [selectedValue, setSelectedValue] = useState('');
    const { theme } = useTheme()
    const data = [
        { value: 120, label: 'Lun' },
        { value: 200, label: 'Mar' },
        { value: 150, label: 'Mié' },
        { value: 300, label: 'Jue' },
        { value: 250, label: 'Vie' },
        { value: 180, label: 'Sáb' },
        { value: 400, label: 'Dom' },
    ];
    const opciones = [
        { value: 'year', label: 'Año' },
        { value: 'year/moth', label: 'Mes/Año' },
        { value: 'year/moth/week', label: 'Año/Mes/Semana' },
    ];
    return (

        <YStack padding={15}>
            <View backgroundColor={theme == "dark" ? "$black6" : "$white6"} padding={10} borderRadius={10}>
                <H5 fontWeight={"bold"}>INGRESOS</H5>
                <Paragraph marginBottom={15}>AÑO 2025</Paragraph>
                <XStack justifyContent="center" alignItems="center" marginBottom={30}>
                    <LineChart
                        data={data}
                        initialSpacing={20}
                        color="#FF4B00"
                        showValuesAsDataPointsText
                        textColor={theme == "dark" ? "#fff" : "#555"}
                        textFontSize={12}
                        thickness={3}
                        hideRules
                        hideDataPoints={false}
                        dataPointsColor="#FF4B00"
                        startOpacity={0.3}
                        endOpacity={0.05}
                        startFillColor="#FF4B00"
                        endFillColor="#FF4B00"
                        yAxisColor="transparent"
                        xAxisColor="transparent"
                        xAxisLabelTextStyle={{ color: theme == "dark" ? "#fff" : "#555", fontWeight: '600' }}
                        yAxisTextStyle={{ color: theme == "dark" ? "#999" : "#555" }}
                        showScrollIndicator={false}
                        areaChart
                    // showTextOnPress
                    />
                </XStack>
                <Select
                    label=""
                    items={opciones}
                    value={selectedValue}
                    onValueChange={setSelectedValue}
                    placeholder="Filtro..."
                    width="100%"
                />
            </View>
        </YStack>

    )
}