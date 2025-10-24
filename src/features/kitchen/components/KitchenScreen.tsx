import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { H2, Image, XStack, YStack, Button, Text, Input, View } from 'tamagui';
import { Filter } from '@tamagui/lucide-icons';
import Header from '@components/layout/Header';
import { Order } from '../types/Order';
import { getOrders } from '../services/KitchenService';
import KitchenListItem from './KitchenListItem';

const KitchenScreen = () => {
  const [allOrders, setAllOrders] = useState<Order[]>([]);
  const [filteredOrders, setFilteredOrders] = useState<Order[]>([]);
  const [activeTab, setActiveTab] = useState<'pending' | 'in_preparation' | 'prepared'>('pending');

  useEffect(() => {
    getOrders().then(setAllOrders);
  }, []);

  useEffect(() => {
    const filtered = allOrders.filter(order => order.status === activeTab);
    setFilteredOrders(filtered);
  }, [allOrders, activeTab]);

  const renderTabButton = (tabType: 'pending' | 'in_preparation' | 'prepared', title: string) => {
    const isActive = activeTab === tabType;
    return (
      <Button
        flex={1}
        backgroundColor={isActive ? '#444' : '#2a2a2a'}
        color={isActive ? 'white' : '#a0a0a0'}
        borderRadius={20}
        size={'$1'}
        borderColor={isActive ? undefined : '#3a3a3a'}
        borderWidth={isActive ? 0 : 1}
        onPress={() => setActiveTab(tabType)}
      >
        {title}
      </Button>
    );
  }

  return (
    <YStack flex={1} backgroundColor="rgb(35,35,35)">

        <XStack paddingHorizontal={'$2'} justifyContent="space-between" alignItems="center" marginVertical={4}>
            <H2 color="rgb(185,62,10)" fontWeight="bold">COCINA</H2>
            <Image source={require('../../../../assets/bh_logo.png')} width={60} height={65} />
        </XStack>

        <XStack space={12} marginVertical={4} backgroundColor={"rgb(30,30,30)"} padding={5}>
            {renderTabButton('pending', 'PENDIENTES')}
            {renderTabButton('in_preparation', 'EN PREPARACION')}
            {renderTabButton('prepared', 'PREPARADOS')}
        </XStack>

        <XStack gap={5} marginVertical={4} alignItems="center" paddingHorizontal={5}>
            <Input flex={1} placeholder="Buscar..." backgroundColor="#2a2a2a" color="white" placeholderTextColor="#a0a0a0" borderRadius={10} />
            <Button icon={<Filter color="#ff8c00" />} backgroundColor="transparent" />
        </XStack>

        <FlatList
            data={filteredOrders}
            renderItem={({ item }) => <KitchenListItem item={item} />}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
        />
    </YStack>
  );
};

export default KitchenScreen;
