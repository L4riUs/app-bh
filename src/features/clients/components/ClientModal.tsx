import React, { useEffect } from "react";
import {
  YStack,
  XStack,
  Input,
  Button,
  Sheet,
  H2,
  Text,
} from "tamagui";
import { useTheme } from "@state/themeContext";
import { Client } from "../types";
import { useClientForm } from "../hooks/useClientForm";

interface ClientModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSave: (client: Omit<Client, "id">) => void;
}

export default function ClientModal({
  open,
  onOpenChange,
  onSave,
}: ClientModalProps) {
  const { theme } = useTheme();
  const {
    formState,
    errors,
    handleChange,
    validate,
    resetForm
  } = useClientForm({ name: "", cedula: "", telefono: "" });

  useEffect(() => {
    if (!open) {
      resetForm();
    }
  }, [open, resetForm]);

  const handleSave = () => {
    if (validate()) {
      onSave(formState);
      resetForm();
    }
  };

  const handleCancel = () => {
    onOpenChange(false);
    resetForm();
  }

  return (
    <Sheet
      forceRemoveScrollEnabled={open}
      modal
      open={open}
      onOpenChange={onOpenChange}
      snapPoints={[85]}
      dismissOnSnapToBottom
      zIndex={100_000}
      animation="medium"
    >
      <Sheet.Overlay
        animation="lazy"
        enterStyle={{ opacity: 0 }}
        exitStyle={{ opacity: 0 }}
      />
      <Sheet.Handle />
      <Sheet.Frame
        padding="$4"
        justifyContent="flex-start"
        alignItems="stretch"
        backgroundColor={theme === "dark" ? "$black3" : "$gray2"}
        space="$5"
      >
        <YStack space="$3">
          <H2 color={theme === "dark" ? "white" : "black"}>
            Registrar Cliente
          </H2>
          <YStack space="$2">
            <Input
              placeholder="Nombre completo"
              value={formState.name}
              onChangeText={(text) => handleChange("name", text)}
              backgroundColor={theme === "dark" ? "$black4" : "$gray3"}
              color={theme === "dark" ? "white" : "black"}
              borderColor={errors.name ? "$red10" : (theme === "dark" ? "$gray8" : "$gray5")}
            />
            {errors.name && <Text color="$red10">{errors.name}</Text>}
          </YStack>
          <YStack space="$2">
            <Input
              placeholder="Cédula"
              value={formState.cedula}
              onChangeText={(text) => handleChange("cedula", text)}
              keyboardType="numeric"
              backgroundColor={theme === "dark" ? "$black4" : "$gray3"}
              color={theme === "dark" ? "white" : "black"}
              borderColor={errors.cedula ? "$red10" : (theme === "dark" ? "$gray8" : "$gray5")}
            />
            {errors.cedula && <Text color="$red10">{errors.cedula}</Text>}
          </YStack>
          <YStack space="$2">
            <Input
              placeholder="Teléfono"
              value={formState.telefono}
              onChangeText={(text) => handleChange("telefono", text)}
              keyboardType="phone-pad"
              backgroundColor={theme === "dark" ? "$black4" : "$gray3"}
              color={theme === "dark" ? "white" : "black"}
              borderColor={errors.telefono ? "$red10" : (theme === "dark" ? "$gray8" : "$gray5")}
            />
            {errors.telefono && <Text color="$red10">{errors.telefono}</Text>}
          </YStack>
          <XStack justifyContent="flex-end" space="$3" paddingTop="$4">
            <Button
              onPress={handleCancel}
              backgroundColor="$gray8"
              color="white"
            >
              Cancelar
            </Button>
            <Button
              onPress={handleSave}
              backgroundColor="$orange10"
              color="white"
            >
              Guardar
            </Button>
          </XStack>
        </YStack>
      </Sheet.Frame>
    </Sheet>
  );
}
