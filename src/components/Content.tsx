import React from 'react'
import Router from 'next/router'
import { Flex, Image, Text, Stack } from '@chakra-ui/react'

//context
import { useUser } from '../context/userContext'

interface ContentProps {
  Url: string
  Title: string
  Author: string
  TextContent: string
}

export function Content({ Url, Title, Author, TextContent }: ContentProps) {
  const { user } = useUser()

  function handleOpenSubject() {
    // if (user === null) {
    //   toast.error('Você precisa logar primeiro')
    // } else {
      Router.push(`forum/post`)
      // Router.push(`forum/${Title}`)
    // }
  }

  return (
    <Flex
      flexDirection={['column', 'row', 'row']}
      bg='gray.800'
      padding='1rem'
      w='90vw'
      margin='1rem auto'
      maxW='1080px'
      borderRadius='2rem'
      border='2px solid'
      borderColor='gray.800'
      _hover={{
        borderColor: 'green.400',
      }}
      minH='10rem'
      onClick={() => handleOpenSubject()}
    >
      <Image
        borderRadius='100%'
        height={['6rem', '4rem', '4rem']}
        width={['6rem', '4rem', '4rem']}
        margin='0 auto 1rem auto'
        src={Url}
        alt={Title}
        border='2px solid'
        borderColor='green.400'
      />
      <Flex
        flexDirection='column'
        marginLeft={['0', '1rem', '1rem']}
        cursor='pointer'
      >
        <Stack spacing='0.5rem'>
          <Text fontSize={['1rem', '1rem', '1.5rem']} color='green.400'>
            {Title}
          </Text>
          <Text
            fontSize='0.7rem'
            color='gray.600'
            textAlign='justify'
            maxH='4rem'
            overflow='hidden'
          >
            {TextContent}
          </Text>
          <Text fontSize='0.8rem' color='green.400'>
            {Author}
          </Text>
        </Stack>
      </Flex>
    </Flex>
  )
}
