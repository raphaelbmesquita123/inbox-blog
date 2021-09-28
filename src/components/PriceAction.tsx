import React from 'react'
import { Box } from '@chakra-ui/react'

interface PriceActionProps {
  src: string
}

export function PriceAction({ src }: PriceActionProps) {
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
