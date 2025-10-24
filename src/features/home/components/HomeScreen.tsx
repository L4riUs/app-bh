import HomeCard from '@features/home/components/HomeCard'
import { Users, ShoppingBasket, Box, CalendarDays, Coffee, Truck } from '@tamagui/lucide-icons'
import { XStack, YStack, ScrollView, Paragraph, H3, Image } from 'tamagui'
import { useTheme } from "@state/themeContext"
export default function HomeLayout() {
  const { theme } = useTheme()
  return (
    <ScrollView backgroundColor={theme == "dark" ? "$black4" : "$white3"}>
      <XStack alignItems='center' justifyContent='space-between' paddingHorizontal={15} paddingVertical={10}>
        <YStack>
          <H3 color="#ff6600" fontWeight="bold" >HOLA, USUARIO</H3>
          <Paragraph>BIENVENIDO A BURGER HOUSE</Paragraph>
        </YStack>
        <Image
          source={require("@assets/bh_logo.png")}
          width={50}
          height={55}
        />
      </XStack>
      <XStack padding={10} gap={10} flexWrap='wrap'>
        <HomeCard title="CLIENTES" link="client" icon={<Users size={35} />} />
        <HomeCard title="ORDENES" link="order" icon={<ShoppingBasket size={35} />} />
        <HomeCard title="PRODUCTOS" link="productlist" icon={<Box size={35} />} />
        <HomeCard title="RESERVACIONES" link="reservation" icon={<CalendarDays size={35} />} />
        <HomeCard title="COCINA" link="client" icon={<Coffee size={35} />} />
        <HomeCard title="DELIVERY" link="delivery" icon={<Truck size={35} />} />
      </XStack>
    </ScrollView>
  )
}