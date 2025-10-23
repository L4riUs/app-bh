import { Progress, YStack, Text } from "tamagui";
import React from "react";

export default function ProgressBar({ value = 45, title }: { value?: number, title: string }) {
  return (
    <YStack width="100%" position="relative">
      <Progress
        value={value}
        height={25}
        borderRadius="$6"
        backgroundColor="$black5"
      >
        <Progress.Indicator animation="bouncy" backgroundColor="#ff6600" />
      </Progress>

      <YStack
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        alignItems="center"
        justifyContent="center"
        pointerEvents="none"
      >
        <Text fontWeight="bold" fontSize="$5" color="$white">
          {title}
        </Text>
      </YStack>
    </YStack>
  );
}
