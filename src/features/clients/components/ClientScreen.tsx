import React from "react";
import { FlatList } from "react-native";
import { YStack, XStack, Input, Button } from "tamagui";
import { Plus } from "@tamagui/lucide-icons";
import BannerTitle from "@components/layout/BannerTitle";
import ClientCard from "./ClientCard";
import { useTheme } from "@state/themeContext";
import { useClients } from "../hooks/useClients";

export default function ClientScreen() {
  const { theme } = useTheme();
  const {
    search,
    setSearch,
    filteredClients,
  } = useClients();

  return (
    <YStack
      flex={1}
      backgroundColor={theme === "dark" ? "$black4" : "$white3"}
      paddingHorizontal="$3"
    >
      <BannerTitle title="Clientes" />

      <XStack alignItems="center" space="$2" marginBottom="$3">
        <Input
          flex={1}
          placeholder="Buscar..."
          value={search}
          onChangeText={setSearch}
          backgroundColor={theme === "dark" ? "$black3" : "$gray3"}
          color={theme === "dark" ? "white" : "black"}
          borderColor={theme === "dark" ? "$gray8" : "$gray5"}
        />
        <Button
          circular
          size="$4"
          backgroundColor="#ff6600"
          icon={Plus}
        />
      </XStack>

      <FlatList
        data={filteredClients}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ClientCard client={item} />}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
      />
    </YStack>
  );
}
