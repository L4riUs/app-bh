import React from "react";
import { XStack, YStack, Stack, Text, Button, Avatar, Separator, Popover } from "tamagui";
import { MoreHorizontal, User, Pencil, Trash } from "@tamagui/lucide-icons";
import { useTheme } from "@state/themeContext";
import { Client } from "../types";

interface ClientCardProps {
  client: Client;
}

export default function ClientCard({ client }: ClientCardProps) {
  const { theme } = useTheme();

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
          <Avatar circular size="$5" backgroundColor="#ff6600">
            <Avatar.Fallback />
            <User color="white" size={40} />
          </Avatar>

          <YStack>
            <Text color="$orange10" fontWeight="700" fontSize="$6">
              {client.name}
            </Text>

            <Separator marginVertical="$4" />

            <Text marginBottom="$2" color={theme === "dark" ? "$gray9Dark" : "$gray10"}>
              CÉDULA: <Text color={theme === "dark" ? "white" : "black"}>{client.cedula}</Text>
            </Text>
            <Text color={theme === "dark" ? "$gray9Dark" : "$gray10"}>
              TELÉFONO: <Text color={theme === "dark" ? "white" : "black"}>{client.telefono}</Text>
            </Text>
          </YStack>
        </XStack>

        <Popover placement="left">
          <Popover.Trigger asChild>
            <Button
              backgroundColor="transparent"
              icon={<MoreHorizontal color={theme === "dark" ? "white" : "black"} size={20} />}
              size="$3"
              marginBottom={"$11"}
              width={"20%"}
            />
          </Popover.Trigger>

          <Popover.Content
            borderWidth={1}
            borderColor="$gray8"
            enterStyle={{ y: -10, opacity: 0 }}
            exitStyle={{ y: -10, opacity: 0 }}
            elevate
            animation={[
              "quick",
              {
                opacity: {
                  overshoot: true,
                },
              },
            ]}
          >
            <YStack space="$2">
              <Button icon={Pencil} chromeless>Editar</Button>
              <Button icon={Trash} chromeless>Borrar</Button>
            </YStack>
          </Popover.Content>
        </Popover>
      </XStack>
    </Stack>
  );
}
