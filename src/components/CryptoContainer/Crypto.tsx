import React, { useEffect, useState } from 'react'
import { Flex, Text, Box, Image } from '@chakra-ui/react'

interface CryptoProps {
  name: string
  image: string
  price: number
  priceChange: number
  cryptoBackgroundColor: string
}

export function Crypto({ name, image, price, priceChange, cryptoBackgroundColor }: CryptoProps) {
  return (
    <Flex
      flexDirection='column'
      bg={cryptoBackgroundColor}
      margin ='1rem'
      padding ='1rem'
      borderRadius='1rem'
      w='10rem'
      h='8rem'
    >
      <Flex
        align='center'
      >
        <Image
          w='1rem'
          src={image} 
          alt={name} />
        <Text marginLeft='0.5rem' wordBreak='break-all'>{name}</Text>
      </Flex>

      <Text fontSize='1.5rem' marginTop='0.5rem'>${price.toFixed(2)}</Text>
      <Text marginTop='0.2rem' color={priceChange > 0 ? 'green.400' : 'red.400'}>{priceChange.toFixed(2)}</Text>
    </Flex>
  )
}
