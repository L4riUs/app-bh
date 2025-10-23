import React from "react"
import { XStack, YStack, Stack, Text, Button, Avatar, Separator } from "tamagui"
import { MoreVertical } from "@tamagui/lucide-icons"
import { useTheme } from "@state/themeContext"
import { Client } from "../types"

// Definimos las props para el componente ClientCard
interface ClientCardProps {
  client: Client;
}

export default function ClientCard({ client }: ClientCardProps) {
  const { theme } = useTheme()

  return (
    <Stack
      backgroundColor={theme === "dark" ? "$black3" : "$gray2"}
      borderRadius="$6"
      padding="$3"
      marginVertical="$2"
      shadowColor="black"
      shadowOpacity={0.2}
      shadowRadius={5}
    >
      <XStack alignItems="center" justifyContent="space-between">
        <XStack alignItems="center" space="$3">
          <Avatar circular size="$6" backgroundColor="$orange10">
            <Avatar.Fallback />
          </Avatar>

          <YStack>
            <Text color="$orange10" fontWeight="700" fontSize="$6">
              {client.name}
            </Text>

            <Separator marginVertical="$1" />

            <Text color={theme === "dark" ? "$gray9Dark" : "$gray10"}>
              CÉDULA <Text color={theme === "dark" ? "white" : "black"}>{client.cedula}</Text>
            </Text>
            <Text color={theme === "dark" ? "$gray9Dark" : "$gray10"}>
              TELÉFONO <Text color={theme === "dark" ? "white" : "black"}>{client.telefono}</Text>
            </Text>
          </YStack>
        </XStack>

        <Button
          backgroundColor="transparent"
          icon={<MoreVertical color={theme === "dark" ? "white" : "black"} />}
          size="$3"
        />
      </XStack>
    </Stack>
  )
}
