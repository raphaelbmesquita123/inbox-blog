import React, { useEffect, useState } from 'react'
import { Flex, Box } from '@chakra-ui/react'
import { api } from '../../services/api'
import { Crypto } from './Crypto'

interface CryptoContainerProps{
  cryptoBackgroundColor: string
}

export function CryptoContainer({ cryptoBackgroundColor }: CryptoContainerProps) {
  const [coins, setCoins] = useState([])
  const [page, setPage] = useState(1)

  useEffect(() => {
    async function getCoins() {
      api
        .get(
          `/markets?vs_currency=usd&order=market_cap_desc&per_page=6&page=1&sparkline=true`
        )
        .then((res) => {
          setCoins(res.data)
        })
        .catch((error) => console.log(error))
    }
    getCoins()
  }, [page])

  return (
    <Flex
        w='100vw'
        justify='center'
        overflowX='scroll'
    >
      {
          coins.map(coin => {
              return (
                  <Box key={coin.id}>
                      <Crypto  name={coin.name} image={coin.image} price={coin.current_price} priceChange={coin.price_change_percentage_24h} cryptoBackgroundColor={cryptoBackgroundColor}/>
                  </Box>
              )
          })
      }
    </Flex>
  )
}
