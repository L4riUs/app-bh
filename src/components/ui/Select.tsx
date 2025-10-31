import { useState, FC } from 'react';
import { Check, ChevronDown } from '@tamagui/lucide-icons';
import { YStack, Label, Button, Dialog, ScrollView, XStack, Text } from 'tamagui';
import { useTheme } from '@state/themeContext';

interface SelectItem {
    value: string;
    label: string;
}

interface CustomSelectProps {
    items: SelectItem[];
    placeholder?: string;
    label?: string;
    value?: string;
    onValueChange?: (value: string) => void;
    width?: number | string;
}

export const CustomSelect: FC<CustomSelectProps> = ({
    items,
    placeholder = 'Selecciona una opción...',
    label,
    value,
    onValueChange,
    width = 220,
}) => {
    const [open, setOpen] = useState(false);
    const selectedItem = items.find(item => item.value === value);

    const handleSelect = (itemValue: string) => {
        onValueChange?.(itemValue);
        setOpen(false);
    };

    const { theme } = useTheme()

    return (
        <YStack space="$2">
            {label && (
                <Label fontSize="$4" fontWeight="600">
                    {label}
                </Label>
            )}
            <Dialog open={open} onOpenChange={setOpen} modal>
                <Dialog.Trigger asChild>
                    <Button
                        width={width}
                        justifyContent="space-between"
                        iconAfter={ChevronDown}
                        backgroundColor={theme == "dark" ? "$black7" : "$white7"}
                    >
                        {selectedItem?.label || placeholder}
                    </Button>
                </Dialog.Trigger>

                <Dialog.Portal>
                    <Dialog.Overlay
                        key="overlay"
                        animation="quick"
                        opacity={0.5}
                        enterStyle={{ opacity: 0 }}
                        exitStyle={{ opacity: 0 }}
                        onPress={() => setOpen(false)}
                    />

                    <Dialog.Content
                        bordered
                        elevate
                        key="content"
                        animateOnly={['transform', 'opacity']}
                        animation={[
                            'quick',
                            {
                                opacity: {
                                    overshootClamping: true,
                                },
                            },
                        ]}
                        enterStyle={{ x: 0, y: -20, opacity: 0, scale: 0.9 }}
                        exitStyle={{ x: 0, y: 10, opacity: 0, scale: 0.95 }}
                        width={300}
                        maxHeight={400}
                        padding="$0"
                    >
                        <ScrollView showsVerticalScrollIndicator={false}>
                            <YStack padding="$2" space="$1">
                                {items.map((item) => (
                                    <XStack
                                        key={item.value}
                                        onPress={() => handleSelect(item.value)}
                                        padding="$3"
                                        borderRadius="$2"
                                        backgroundColor={value === item.value ? '#FF4B00' : 'transparent'}
                                        hoverStyle={{ backgroundColor: '$blue4' }}
                                        pressStyle={{ backgroundColor: '#FF4B00', scale: 0.98 }}
                                        cursor="pointer"
                                        alignItems="center"
                                        justifyContent="space-between"
                                    >
                                        <Text flex={1}>{item.label}</Text>
                                        {value === item.value && <Check size={16} color="$white1" />}
                                    </XStack>
                                ))}
                            </YStack>
                        </ScrollView>
                    </Dialog.Content>
                </Dialog.Portal>
            </Dialog>
        </YStack>
    );
};

export default CustomSelect