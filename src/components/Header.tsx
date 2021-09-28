import React from 'react'
import Link from 'next/link'
import { Flex, Image, Box, Text } from '@chakra-ui/react'

export function Header() {
  return (
    <Box
      w='100vw'
      h='4rem'
      bg='linear-gradient(29deg, rgba(97,0,119,1) 0%, rgba(116,0,127,1) 28%, rgba(166,0,131,1) 68%, rgba(226,0,173,1) 94%);'
    >
      <Flex
        w='100vw'
        justify='space-between'
        alignItems='center'
        h='100%'
        maxW='1080px'
        padding='0 2rem'
        margin='0 auto'
      >
        <Link href='/' passHref>
          <Image h='2rem' src='./logo.png' alt='inbox logo' cursor='pointer'/>
        </Link>
        <Text fontSize='1rem'>Forum</Text>
      </Flex>
    </Box>
  )
}
