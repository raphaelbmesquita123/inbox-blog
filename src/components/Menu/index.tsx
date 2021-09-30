import React from 'react'
import { Flex, Box } from '@chakra-ui/react'

//component
import { MenuButton } from './MenuButton'

export function Menu() {
  return (
    <Box w='100vw' bg='gray.800'>
      <Flex
        justify='space-between'
        maxW='1080px'
        margin='0 auto'
        padding='0 1rem'
      >
        <Flex>
          <MenuButton link='/' hoverColor='green.400' text='Mineração'/>
          <MenuButton link='/' hoverColor='orange.400' text='Trader'/>
          <MenuButton link='/' hoverColor='blue.400' text='IQOption'/>
        </Flex>

        <Flex>
          <MenuButton link='/courses' hoverColor='red.400' text='Cursos'/>
        </Flex>
      </Flex>
    </Box>
  )
}
