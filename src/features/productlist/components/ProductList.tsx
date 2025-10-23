import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { H2, Image, XStack, YStack, Button, Text, Input, View } from 'tamagui';
import { Plus } from '@tamagui/lucide-icons';
import Header from '@components/layout/Header';
import { Product } from '../types/Product';
import { getProducts } from '../services/ProductService';
import ProductListItem from './ProductListItem';

const ProductListScreen = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    getProducts().then(setProducts);
  }, []);

  return (
    <YStack flex={1} backgroundColor="rgb(35,35,35)">
        {/* general Header */}
        <Header />

        <XStack paddingHorizontal={"$2"} justifyContent="space-between" alignItems="center" marginVertical={4}>
            <H2 color="rgb(185,62,10)" fontWeight="bold">PRODUCTOS</H2>
            <Image source={require('../../../../assets/bh_logo.png')} width={60} height={65} />
        </XStack>

        <XStack space={12} marginVertical={4} backgroundColor={"rgb(30,30,30)"} padding={5}>
            <Button flex={1} backgroundColor="#444" color="white" borderRadius={20} size={"$1"}>PREPARADOS</Button>
            <Button flex={1} backgroundColor="#2a2a2a" color="#a0a0a0" borderRadius={20} borderColor="#3a3a3a" size={"$1"} borderWidth={1}>PROCESADOS</Button>
        </XStack>

        <XStack gap={5} marginVertical={4} alignItems="center" paddingHorizontal={5}>
            <Input flex={1} placeholder="Buscar..." backgroundColor="#2a2a2a" color="white" placeholderTextColor="#a0a0a0" borderRadius={10} />
            <Button icon={<Plus color="white" />} backgroundColor="#ff8c00" circular size="$5" />
        </XStack>

        <FlatList
            data={products}
            renderItem={({ item }) => <ProductListItem item={item} />}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
        />
    </YStack>
  );
};

export default ProductListScreen;
