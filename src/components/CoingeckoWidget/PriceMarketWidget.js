import React from 'react'
import { Box } from '@chakra-ui/react'
import Script from 'next/script'


export function PriceMarketWidget (){
  return (
    <Box
    w='100vw'>
      <Script src='https://widgets.coingecko.com/coingecko-coin-price-marquee-widget.js'></Script>
      <coingecko-coin-price-marquee-widget
        coin-ids='bitcoin,ethereum, cardano,monero, eos,ripple,litecoin'
        currency='usd'
        background-color='#ffffff'
        locale='en'
      />
    </Box>
  )
}

