import HomeCard from '@features/home/components/HomeCard'
import { Users, ShoppingBasket, Box,CalendarDays, Coffee, Truck } from '@tamagui/lucide-icons'
import { XStack, ScrollView } from 'tamagui'
import { useTheme } from "@state/themeContext"
export default function HomeLayout() {
  const { theme } = useTheme()
  return (
    <ScrollView backgroundColor={theme == "dark" ? "$black4" : "$white3"}>
      <XStack padding={10} gap={10} flexWrap='wrap'>
        <HomeCard title="CLIENTES" link="client" icon={<Users size={35} />} />
        <HomeCard title="ORDENES" link="client" icon={<ShoppingBasket size={35} />} />
        <HomeCard title="PRODUCTOS" link="client" icon={<Box size={35} />} />
        <HomeCard title="RESERVACIONES" link="client" icon={<CalendarDays size={35} />} />
        <HomeCard title="COCINA" link="client" icon={<Coffee size={35} />} />
        <HomeCard title="DELIVERY" link="client" icon={<Truck size={35} />} />
      </XStack>
    </ScrollView>
  )
}