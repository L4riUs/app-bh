import DeliveryTabs from './DeliveryTabs'
import DeliveryTabs_Available from './DeliveryTabs_Available'
import DeliveryTabs_Pendings from './DeliveryTabs_Pendings'
import DeliveryTabs_Delivered from './DeliveryTabs_Delivered'
import BannerTitle from '@components/layout/BannerTitle'
import { YStack } from 'tamagui'
import { useTheme } from '@state/themeContext'

export default function DeliveryScreen() {
  const { theme } = useTheme()
  return (
    <YStack flex={1} backgroundColor={theme == 'dark' ? '$black4' : '$white3'}>
      <BannerTitle title="DELIVERY" />
      <DeliveryTabs
        Content1={<DeliveryTabs_Available />}
        Content2={<DeliveryTabs_Pendings />}
        Content3={<DeliveryTabs_Delivered />}
      />
    </YStack>
  )
}
