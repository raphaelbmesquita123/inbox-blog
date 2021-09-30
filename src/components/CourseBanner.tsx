import React from 'react'
import Link from 'next/link'
import { Flex, Image, Text, Button } from '@chakra-ui/react'

interface CourseBannerProps {
  image: string
  title: string
  description: string
  titleColor: string
}

export function CourseBanner({
  image,
  title,
  description,
  titleColor,
}: CourseBannerProps) {
  return (
    <Flex padding='1rem' bg='gray.800' align='center' borderRadius='1rem' flexDirection={['column', 'row']}>
      <Image w={['100%', '120px']}src={image} borderRadius='1rem' />
      <Flex h='100%' flexDirection='column' padding='1rem'>
        <Text fontSize={['1rem', '1.5rem', '1.5rem']} color={titleColor}>
          {title}
        </Text>
        <Text
          marginTop='0.5rem'
          fontSize='0.7rem'
          color='gray.600'
          textAlign='justify'
          h='4rem'
          overflow='hidden'
        >
          {description}
        </Text>
      </Flex>
      <Flex padding='1rem' flexDirection={['row', 'column']} >
        <Button bg='red.400' color='black' _hover={{ bg: 'red.700' }} fontSize={['0.8rem', '1rem']}>
          Saiba Mais
        </Button>

        <a href='https://google.com' target='_blank' rel='noopener noreferrer'>
          <Button
            bg='green.400'
            color='black'
            _hover={{ bg: 'green.700' }}
            marginTop={['0', '1rem']}
            fontSize={['0.8rem', '1rem']}
            marginLeft={['0.5rem', '0rem']}
          >
            Quero Comprar
          </Button>
        </a>
      </Flex>
    </Flex>
  )
}
