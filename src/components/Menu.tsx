import React from 'react'
import Link from 'next/link'
import { Flex, Box, Button } from '@chakra-ui/react'

export function Menu() {
  return (
    <Box w='100vw' bg='gray.800'>
      <Flex
        w='100vw'
        justify='space-between'
        maxW='1080px'
        margin='0 auto'
        padding='1rem'
      >
        <Box>
          <Link href='/forum'>
            <Button bg='gray.800' _hover={{ color: 'green.400' }}>
              Mineração
            </Button>
          </Link>
          <Link href='/forum'>
            <Button
              marginLeft='1rem'
              bg='gray.800'
              _hover={{ color: 'orange.400' }}
            >
              Trader
            </Button>
          </Link>
          <Link href='/forum'>
            <Button
              marginLeft='1rem'
              bg='gray.800'
              _hover={{ color: 'blue.400' }}
            >
              IQ Option
            </Button>
          </Link>
        </Box>
        <Box>
          <Link href='/courses'>
            <Button bg='gray.800' _hover={{ color: 'red.400' }}>
              Coversor
            </Button>
          </Link>
          <Link href='/courses'>
            <Button bg='gray.800' _hover={{ color: 'red.400' }}>
              Cursos
            </Button>
          </Link>
        </Box>
      </Flex>
    </Box>
  )
}
