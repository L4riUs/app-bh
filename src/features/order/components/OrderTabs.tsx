import { useState } from "react";
import { Text, Tabs, YStack } from "tamagui";
import { ReactNode } from "react";
import { useTheme } from "@state/themeContext";

export default function OrderTabs({ Content1, Content2, Content3, Content4 }: { Content1: ReactNode, Content2: ReactNode, Content3: ReactNode, Content4: ReactNode }) {
    const [value, setValue] = useState("tab1");
    const { theme } = useTheme();

    const tabBg = (v: string) => (value === v ? "red" : (theme === "dark" ? "$black7" : "$white6"));
    const textColor = (v: string) => (value === v ? (theme == "dark" ? "$white6" : "$black6") : "#888");

    return (
        <Tabs value={value} onValueChange={setValue} width="100%" flex={1} flexDirection="column" >
            <Tabs.List padding="$4" backgroundColor="transparent" borderBottomWidth={0} scrollable space="$3" gap="$3">
                <Tabs.Tab value="tab1" unstyled backgroundColor={tabBg("tab1")} borderRadius="$10" paddingHorizontal="$5" paddingVertical="$3">
                    <Text color={textColor("tab1")} fontWeight="600" fontSize="$4">DELIVERY</Text>
                </Tabs.Tab>

                <Tabs.Tab value="tab2" unstyled backgroundColor={tabBg("tab2")} borderRadius="$10" paddingHorizontal="$5" paddingVertical="$3">
                    <Text color={textColor("tab2")} fontWeight="600" fontSize="$4">LOCAL</Text>
                </Tabs.Tab>

                <Tabs.Tab value="tab3" unstyled backgroundColor={tabBg("tab3")} borderRadius="$10" paddingHorizontal="$5" paddingVertical="$3">
                    <Text color={textColor("tab3")} fontWeight="600" fontSize="$4">LLEVAR</Text>
                </Tabs.Tab>

                <Tabs.Tab value="tab4" unstyled backgroundColor={tabBg("tab4")} borderRadius="$10" paddingHorizontal="$5" paddingVertical="$3">
                    <Text color={textColor("tab4")} fontWeight="600" fontSize="$4">RESERVACION</Text>
                </Tabs.Tab>
            </Tabs.List>

            <YStack flex={1} padding="$4">
                {value === "tab1" && <YStack flex={1}>{Content1}</YStack>}
                {value === "tab2" && <YStack flex={1}>{Content2}</YStack>}
                {value === "tab3" && <YStack flex={1}>{Content3}</YStack>}
                {value === "tab4" && <YStack flex={1}>{Content4}</YStack>}
            </YStack>
        </Tabs>
    );
}