import { Button, Card, Paragraph, XStack } from 'tamagui'
import { Link } from 'expo-router'
export default function Home({ title, link, icon }: { title: string, link: string, icon: any }) {
  return (
    <Card elevate size="$3" bordered width="48%">
      <Card.Header padded>
        {icon}
        <Paragraph marginTop={10} fontSize={18} color="$black11">{title}</Paragraph>
      </Card.Header>
      <Card.Footer padded>
        <XStack flex={1} />
        <Link asChild href={link}>
          <Button borderRadius="$10">ACCEDER</Button>
        </Link>
      </Card.Footer>
    </Card>
  )
}