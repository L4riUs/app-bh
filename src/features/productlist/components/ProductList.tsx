import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { H2, Image, XStack, YStack, Button, Text, Input, View } from 'tamagui';
import { Plus } from '@tamagui/lucide-icons';
import Header from '@components/layout/Header';
import { Product } from '../types/Product';
import { getProducts } from '../services/ProductService';
import ProductListItem from './ProductListItem';

const ProductListScreen = () => {
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [activeTab, setActiveTab] = useState<'made' | 'processed'>('made');

  useEffect(() => {
    getProducts().then(setAllProducts);
  }, []);

  useEffect(() => {
    const filtered = allProducts.filter(product => product.type === activeTab);
    setFilteredProducts(filtered);
  }, [allProducts, activeTab]);

  const renderTabButton = (tabType: 'made' | 'processed', title: string) => {
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
        {/* general Header */}
        <Header />

        <XStack paddingHorizontal={'$2'} justifyContent="space-between" alignItems="center" marginVertical={4}>
            <H2 color="rgb(185,62,10)" fontWeight="bold">PRODUCTOS</H2>
            <Image source={require('../../../../assets/bh_logo.png')} width={60} height={65} />
        </XStack>

        <XStack space={12} marginVertical={4} backgroundColor={"rgb(30,30,30)"} padding={5}>
            {renderTabButton('made', 'PREPARADOS')}
            {renderTabButton('processed', 'PROCESADOS')}
        </XStack>

        <XStack gap={5} marginVertical={4} alignItems="center" paddingHorizontal={5}>
            <Input flex={1} placeholder="Buscar..." backgroundColor="#2a2a2a" color="white" placeholderTextColor="#a0a0a0" borderRadius={10} />
            <Button icon={<Plus color="white" />} backgroundColor="#ff8c00" circular size="$5" />
        </XStack>

        <FlatList
            data={filteredProducts}
            renderItem={({ item }) => <ProductListItem item={item} />}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
        />
    </YStack>
  );
};

export default ProductListScreen;
