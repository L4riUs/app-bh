import React, { useState } from "react"
import { FlatList } from "react-native"
import { YStack, XStack, Input, Button } from "tamagui"
import { Plus } from "@tamagui/lucide-icons"
import BannerTitle from "@components/layout/BannerTitle"
import ClientSearch from "./ClientSearch"
import ClientCard from "./ClientCard"
import { useTheme } from "@state/themeContext"
import { Client } from "../types"

const clientsData: Client[] = [
  { id: "1", name: "DULCE SEQUERA", cedula: "30569851", telefono: "04121214717" },
  { id: "2", name: "MARIA PEREZ", cedula: "12345678", telefono: "04129876543" },
  { id: "3", name: "PEDRO GOMEZ", cedula: "87654321", telefono: "04161234567" },
  { id: "4", name: "PEDRO GOMEZ", cedula: "87654321", telefono: "04161234567" },
  { id: "5", name: "PEDRO GOMEZ", cedula: "87654321", telefono: "04161234567" },
  { id: "6", name: "PEDRO GOMEZ", cedula: "87654321", telefono: "04161234567" },
  { id: "7", name: "PEDRO GOMEZ", cedula: "87654321", telefono: "04161234567" },
  { id: "8", name: "PEDRO GOMEZ", cedula: "87654321", telefono: "04161234567" },
]

export default function ClientScreen() {
  const { theme } = useTheme()
  const [clients, setClients] = useState<Client[]>(clientsData)
  const [search, setSearch] = useState("")

  const filtered = clients.filter(c =>
    c.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <YStack
      flex={1}
      backgroundColor={theme === "dark" ? "$black4" : "$white3"}
      paddingHorizontal="$3"
    >
      {/* 🔸 Encabezado */}
      <BannerTitle title="Clientes" />

      {/* 🔸 Buscador y botón agregar */}

        <ClientSearch/>
 

      {/* 🔸 Lista de clientes */}
      <FlatList
        data={filtered}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ClientCard client={item} />}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
      />
    </YStack>
  )
}
