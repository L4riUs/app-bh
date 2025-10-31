import { H3, Image, XStack } from 'tamagui'
export default function BannerTitle({ title }: { title: string }) {
    return (
        <XStack justifyContent='space-between' alignItems='flex-end' padding={15}>
            <H3 fontWeight="bold" color="#ff6600">{title}</H3>
            
            <Image
                source={require("@assets/bh_logo.png")}
                width={50}
                height={55}
            />
        </XStack>
    )
}