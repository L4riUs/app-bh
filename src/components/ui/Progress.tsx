import { Progress, YStack, Text } from "tamagui";
import React from "react";

export default function ProgressBar({ value = 45 }: { value?: number }) {
  return (
    <YStack width="100%" position="relative">
      <Progress
        value={value}
        height={25}
        borderRadius="$6"
        backgroundColor="$neutral3" // o usa tu token/theme
      >
        <Progress.Indicator animation="bouncy" backgroundColor="#ff6600" />
      </Progress>

      {/* Overlay centrado con el texto */}
      <YStack
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        alignItems="center"
        justifyContent="center"
        pointerEvents="none" // deja pasar eventos al Progress si hace falta
      >
        <Text fontWeight="bold" fontSize="$5" color="$white">
          {value}
        </Text>
      </YStack>
    </YStack>
  );
}
