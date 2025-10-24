import React from 'react';
import { Card, XStack, YStack, Button, Text, View } from 'tamagui';
import { Order } from '../types/Order';

interface KitchenListItemProps {
  item: Order;
}

const KitchenListItem = ({ item }: KitchenListItemProps) => (
  <Card backgroundColor="#2a2a2a" borderRadius={20} marginVertical={8} padding={12} borderColor="#3a3a3a" borderWidth={1}>
    <XStack justifyContent="space-between">
      <YStack>
        <Text color="white">NRO: <Text color="#ff8c00">{item.orderNumber}</Text></Text>
        <Text color="white">CLIENTE: {item.clientName}</Text>
        <Text color="white">TIPO: <Text color="#a0a0a0">{item.orderType}</Text></Text>
      </YStack>
      <YStack alignItems="flex-end">
        <Text color="#a0a0a0">{item.date}</Text>
        <Text color="#a0a0a0">{item.time}</Text>
      </YStack>
    </XStack>
    <XStack marginTop={12} space={'$2'}>
      <Button flex={1} backgroundColor="#ff8c00" color="white">PREPARAR</Button>
      <Button flex={1} backgroundColor="#444" color="white">DETALLES</Button>
    </XStack>
  </Card>
);

export default KitchenListItem;
