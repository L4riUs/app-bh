import React from 'react';
import { H4, View, useTheme as ThemeTamagui, H5, Paragraph, XStack, YStack } from 'tamagui';
import { useTheme } from '@state/themeContext';
import { PieChart } from 'react-native-gifted-charts';
import Select from '../../../components/ui/Select';
import { Circle } from '@tamagui/lucide-icons';
import { useState } from 'react';
export default function SaleGraphic() {
    const { theme } = useTheme()
    const themeTamagui = ThemeTamagui()
    const pieData = [
        { value: 54, color: '#FF4B00' },
        { value: 40, color: '#FFB200' },
        { value: 20, color: '#b41a1a' },
    ];
    const [selectedValue, setSelectedValue] = useState('');

    const opciones = [
        { value: 'year', label: 'Año' },
        { value: 'year/moth', label: 'Mes/Año' },
        { value: 'year/moth/week', label: 'Año/Mes/Semana' },
    ];

    return (
        <YStack padding={15}>
            <View backgroundColor={theme == "dark" ? "$black6" : "$white6"} padding={10} borderRadius={10}>
                <H5 fontWeight={"bold"}>TOTAL DE VENTAS</H5>
                <Paragraph>AÑO 2025</Paragraph>
                <XStack justifyContent="center" alignItems="center" marginBottom={30}>
                    <PieChart
                        data={pieData}
                        donut
                        radius={120}
                        showValuesAsLabels
                        innerRadius={70}
                        centerLabelComponent={() => <H4 color={theme == "dark" ? themeTamagui.white4?.val : themeTamagui.black3?.val.val} fontWeight="bold">VENTAS</H4>}
                        innerCircleColor={theme == "dark" ? themeTamagui.black6?.val : themeTamagui.white4?.val}
                        showText
                        textColor="white"
                        textSize={52}
                    />
                </XStack>
                <XStack flex={1} flexWrap='wrap' marginBottom={30} gap={25} justifyContent='center'>
                    <XStack gap={10}>
                        <Circle color="#FF4B00" backgroundColor="#FF4B00" borderRadius={50} />
                        <Paragraph>DELIVERY: 10</Paragraph>
                    </XStack>
                    <XStack gap={10}>
                        <Circle color="#FF4B00" backgroundColor="#FF4B00" borderRadius={50} />
                        <Paragraph>LOCAL: 10</Paragraph>
                    </XStack>
                    <XStack gap={10}>
                        <Circle color="#FF4B00" backgroundColor="#FF4B00" borderRadius={50} />
                        <Paragraph>LLEVAR: 10</Paragraph>
                    </XStack>
                    <XStack gap={10}>
                        <Circle color="#FF4B00" backgroundColor="#FF4B00" borderRadius={50} />
                        <Paragraph>ORDENES TOTALES: 10</Paragraph>
                    </XStack>
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
    );
};