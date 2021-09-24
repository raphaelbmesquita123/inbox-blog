import { Box, Image, Text, Flex, Button } from '@chakra-ui/react'
import { StarIcon } from '@chakra-ui/icons'

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
      <Box
        position='absolute'
        maxW='40rem'
        top={['45%', '50%']}
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
        padding='2rem'
        flexDirection={['column', 'row']}
      >
        <Text>
          Fique por dentro de tudo no mundo das crypto moedas, com os melhores
          youtubers do Brasil
        </Text>
        <Button
          marginLeft={['none', '2rem']}
          justifySelf='flex-end'
          colorScheme='pink'
          padding='1rem'
          width={['80vw', 'auto']}
        >
          Forum
        </Button>
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
