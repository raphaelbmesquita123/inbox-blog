import React from 'react'
import { Flex, Image, Text, Grid, Box, Button } from '@chakra-ui/react'

export default function Courses() {
  return (
    <Box w='100vw'>
      <Grid
        maxW='1080px'
        padding='2rem 1rem'
        gridTemplateColumns='repeat(auto-fit, minmax(300px, 1fr))'
        margin='0 auto'
        gap='2rem'
      >
        <Flex padding='1rem' flexDirection='column' bg='gray.800' maxW='300px'>
          <Image w='300px' src='course.png' borderRadius='1rem' />
          <Text color='red.400' marginTop='1rem'>
            Grupo de sinais
          </Text>
          <Text
            marginTop='1rem'
            fontSize='0.7rem'
            color='gray.600'
            textAlign='justify'
            h='4rem'
            overflow='hidden'
          >
            Grupo de sinaisGrupo de sinaisGrupo de sinaisGrupo de sinaisGrupo de
            sinaisGrupo de sinaisGrupo de sinaisGrupo de sinaisGrupo de
            sinaisGrupo de sinaisGrupo de sinaisGrupo de sinaisGrupo de
            sinaisGrupo de sinaisGrupo de sinaisGrupo de sinaisGrupo de
            sinaisGrupo de sinaisGrupo de sinaisGrupo de sinaisGrupo de
            sinaisGrupo de sinaisGrupo de sinaisGrupo de sinaisGrupo de
            sinaisGrupo de sinaisGrupo de sinaisGrupo de sinais
          </Text>
          <Flex w='100%' justify='space-between' marginTop='1rem'>
            <Button bg='red.400' color='black' _hover={{ bg: 'red.700' }}>
              Saiba Mais
            </Button>
            <a
              href='https://google.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Button bg='green.400' color='black' _hover={{ bg: 'green.700' }}>
                Quero Comprar
              </Button>
            </a>
          </Flex>
        </Flex>
      </Grid>
    </Box>
  )
}
