import { XStack, Image } from 'tamagui'
import { Bell } from "@tamagui/lucide-icons"
export default function Header() {
    return (
        <XStack alignItems='center' gap={10}>
            <Bell size={25} />
            <Image source={require("@assets/1.jpg")} width={35} height={35} borderRadius={50}/>
        </XStack>
    )
}