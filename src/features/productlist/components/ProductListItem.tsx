import React from 'react';
import { Card, Image, XStack, YStack, Button, Text, View } from 'tamagui';
import { MoreHorizontal } from '@tamagui/lucide-icons';
import { Product } from '../types/Product';

interface ProductListItemProps {
  item: Product;
}

const ProductListItem = ({ item }: ProductListItemProps) => (
  <Card backgroundColor="#2a2a2a" borderRadius={20} marginVertical={8} padding={12} borderColor="#3a3a3a" borderWidth={1}>
    <XStack>
      <Image
        source={item.image}
        width={80}
        height={80}
        borderRadius={10}
      />
      <YStack flex={1} marginLeft={12} justifyContent="space-between">
        <View>
          <Text color="white" fontSize={18} fontWeight="bold">{item.name}</Text>
          <Text color="#a0a0a0" fontSize={12}>{item.description}</Text>
        </View>
        <XStack justifyContent="space-between" alignItems="center">
          <XStack space="$2" alignItems="center">
            <Text color="#ff8c00" fontWeight="bold">PRECIO</Text>
            <View backgroundColor="rgb(185,62,10)" borderRadius={5} paddingHorizontal={8} paddingVertical={4}>
              <Text color="white" fontWeight="bold">{item.price}</Text>
            </View>
          </XStack>
          <Button size="$2" icon={<MoreHorizontal color='#ff8c00'/>} chromeless circular />
        </XStack>
      </YStack>
    </XStack>
  </Card>
);

export default ProductListItem;