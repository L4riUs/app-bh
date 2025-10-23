
import React from 'react';
import { FlatList } from 'react-native';
import { Card, H2, Image, XStack, YStack, Button, Text, Input, View } from 'tamagui';
import { MoreHorizontal, Plus, Menu, Bell } from '@tamagui/lucide-icons';

interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  image: any;
}

const products: Product[] = [
  { id: '1', name: 'SUPER SMASHER', description: 'DESCRIPCION DEL PRODUCTO', price: '15 $', image: require('../../../../assets/bh_logo.png') },
  { id: '2', name: 'SUPER SMASHER', description: 'DESCRIPCION DEL PRODUCTO', price: '15 $', image: require('../../../../assets/bh_logo.png') },
  { id: '3', name: 'SUPER SMASHER', description: 'DESCRIPCION DEL PRODUCTO', price: '15 $', image: require('../../../../assets/bh_logo.png') },
  { id: '4', name: 'SUPER SMASHER', description: 'DESCRIPCION DEL PRODUCTO', price: '15 $', image: require('../../../../assets/bh_logo.png') },
  { id: '5', name: 'SUPER SMASHER', description: 'DESCRIPCION DEL PRODUCTO', price: '15 $', image: require('../../../../assets/bh_logo.png') },
  { id: '6', name: 'SUPER SMASHER', description: 'DESCRIPCION DEL PRODUCTO', price: '15 $', image: require('../../../../assets/bh_logo.png') },
  { id: '7', name: 'SUPER SMASHER', description: 'DESCRIPCION DEL PRODUCTO', price: '15 $', image: require('../../../../assets/bh_logo.png') },
  { id: '8', name: 'SUPER SMASHER', description: 'DESCRIPCION DEL PRODUCTO', price: '15 $', image: require('../../../../assets/bh_logo.png') },
  { id: '9', name: 'SUPER SMASHER', description: 'DESCRIPCION DEL PRODUCTO', price: '15 $', image: require('../../../../assets/bh_logo.png') },
];

const ProductListScreen = () => {

  const renderItem = ({ item }: { item: Product }) => (
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

  return (
    <YStack flex={1} backgroundColor="rgb(35,35,35)">
        {/* Custom Header */}
        <XStack justifyContent="space-between" alignItems="center" paddingHorizontal={16} paddingTop={10} backgroundColor={"rgb(52,52,52)"}>
            <Button icon={<Menu color="white" />} chromeless circular />
            <XStack space={12} alignItems="center">
                <Button icon={<Bell color="white" />} chromeless circular />
                <Image source={{ uri: 'https://i.pravatar.cc/150?u=a042581f4e29026704d' }} width={40} height={40} borderRadius={20} />
            </XStack>
        </XStack>

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
            renderItem={renderItem}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
        />
    </YStack>
  );
};

export default ProductListScreen;
