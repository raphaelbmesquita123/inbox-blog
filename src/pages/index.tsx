import Head from 'next/head'
import Link from 'next/link'
import { Box, Image, Text, Flex, Button } from '@chakra-ui/react'

//components
import { CryptoContainer } from '../components/CryptoContainer'
import { CoingeckoWidget } from '../components/CoingeckoWidget'

export default function Home() {
  return (
    <Flex
      position='relative'
      align='flex-end'
      w='100vw'
      h='100vh'
      backgroundImage='url(./image.png)'
      backgroundRepeat='no-repeat'
      backgroundSize='cover'
      backgroundPosition='center'
      zIndex='0'
    >
      <Head>
        <title>INBOX</title>
      </Head>
      <Box
        position='absolute'
        maxW='40rem'
        top={['40%', '50%']}
        transform='translateY(-50%)'
        padding='0 2rem'
        marginLeft={['0', '0', '4rem']}
      >
        <Image src='./logo.png' alt='inbox logo' />
        <Text
          marginTop='2rem'
          fontSize={['1.5rem', '1.5rem', '2rem']}
          textAlign={['center', 'justify']}
        >
          Fique por dentro de tudo no mundo das crypto moedas, com os melhores
          youtubers do Brasil
        </Text>
      </Box>
      <Flex
        w='100vw'
        align='center'
        justify='center'
        padding='0 2rem'
        flexDirection='column'
      >
        <Link href='/forum'>
          <Button
            marginLeft={['none', '2rem']}
            alignSelf='flex-end'
            colorScheme='pink'
            padding='1rem'
            width={['80vw', 'auto']}
            marginBottom='2rem'
          >
            Forum
          </Button>
        </Link>
        <CoingeckoWidget />
      </Flex>

      <Flex
        position='absolute'
        w='100vw'
        h='100vh'
        bg='linear-gradient(29deg, rgba(97,0,119,1) 0%, rgba(116,0,127,1) 28%, rgba(166,0,131,1) 68%, rgba(226,0,173,1) 94%);'
        opacity='0.8'
        zIndex='-1'
      />
    </Flex>
  )
}
