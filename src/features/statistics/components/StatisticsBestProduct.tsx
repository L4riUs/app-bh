import React from 'react';
import { BarChart } from 'react-native-gifted-charts';
import { YStack, XStack, Paragraph, H5, View } from 'tamagui';
import { useTheme } from '@state/themeContext';
import Select from "@components/ui/Select";
import { ScrollView } from 'react-native';

export default function StatisticsBestProduct() {
    const { theme } = useTheme();
    const [selectedValue, setSelectedValue] = React.useState('');

    const months = [
        'Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun',
        'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'
    ];

    const colors = [
        '#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A',
        '#98D8C8', '#F7DC6F', '#BB8FCE', '#85C1E2',
        '#F8B739', '#52B788', '#E76F51', '#2A9D8F'
    ];

    const defaultProducts = [
        { name: 'Smash Burger', total: 50 },
        { name: 'Perrito caliente max', total: 80 },
        { name: 'Pizza pro', total: 70 },
        { name: 'Sandwich', total: 100 },
        { name: 'Shawarma FULL', total: 90 },
        { name: 'Hamburguesa', total: 130 },
        { name: 'Papas fritas', total: 120 },
        { name: 'Pepito Ultra', total: 140 },
        { name: 'Maxi perro', total: 160 },
        { name: 'Coca cola', total: 180 },
        { name: 'Sandwitch de pollo', total: 220 },
        { name: 'Kebab', total: 250 },
    ];

    const opciones = [
        { value: 'year', label: 'Año' },
        { value: 'year/month', label: 'Mes/Año' },
        { value: 'year/month/week', label: 'Año/Mes/Semana' },
    ];

    const barData = defaultProducts.map((p, i) => ({
        value: p.total,
        label: months[i],
        frontColor: colors[i],
        topLabelComponent: () => (
            <Paragraph
                fontSize={11}
                fontWeight="700"
                color={theme === 'dark' ? '#fff' : '#333'}
                style={{ textAlign: 'center', marginBottom: 4 }}
            >
                {p.total}
            </Paragraph>
        ),
    }));

    return (
        <YStack padding={15}>
            <View
                backgroundColor={theme == "dark" ? "$black6" : "$white6"}
                padding={10}
                borderRadius={10}
            >
                <H5 fontWeight={"bold"}>PRODUCTOS MÁS VENDIDOS</H5>
                <Paragraph marginBottom={15}>AÑO 2025</Paragraph>

                <XStack justifyContent="center" alignItems="center" marginBottom={20}>
                    <BarChart
                        barWidth={28}
                        noOfSections={5}
                        barBorderRadius={6}
                        data={barData}
                        yAxisColor="transparent"
                        xAxisColor="transparent"
                        xAxisLabelTextStyle={{
                            color: theme === 'dark' ? '#fff' : '#777',
                            fontWeight: '600',
                            fontSize: 11,
                        }}
                        yAxisTextStyle={{
                            color: '#999',
                        }}
                        hideRules
                        initialSpacing={20}
                        spacing={30}
                        showScrollIndicator={false}
                        disablePress
                        xAxisThickness={1}
                        height={250}
                    />
                </XStack>

                <View
                    marginBottom={20}
                    padding={10}
                    backgroundColor={theme === 'dark' ? '$black7' : '$gray2'}
                    borderRadius={8}
                >
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        <XStack gap={12} flexWrap="wrap">
                            {defaultProducts.map((product, index) => (
                                <XStack key={index} alignItems="center" gap={6} marginRight={8}>
                                    <View
                                        width={16}
                                        height={16}
                                        backgroundColor={colors[index]}
                                        borderRadius={3}
                                    />
                                    <Paragraph fontSize={11} color={theme === 'dark' ? '#ddd' : '#555'}>
                                        {product.name}
                                    </Paragraph>
                                </XStack>
                            ))}
                        </XStack>
                    </ScrollView>
                </View>

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
}