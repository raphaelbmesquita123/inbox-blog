import React from 'react'
import { Box } from '@chakra-ui/react'

interface BannerProps {
  src: string
}

export function Banner({ src }: BannerProps) {
  return (
    <Box
        h='8rem'
        w='100vw'
        backgroundImage={`url(${src})`}
        backgroundPosition='center'
        backgroundRepeat='no-repeat'
        backgroundSize='cover'
    >
    </Box>
  )
}
