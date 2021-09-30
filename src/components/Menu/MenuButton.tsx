import React, { useState } from 'react'
import Link from 'next/link'
import { Text } from '@chakra-ui/react'

interface MenuButtonProps {
  link: string
  hoverColor: string
  text: string
}

export function MenuButton({ link, hoverColor, text }: MenuButtonProps) {
  // const [clickedOn, setClickedOn] = useState('')
  // function handleColorChange (){
  //   setClickedOn('')
  //   setClickedOn(text)
  // }
  
  return (
    <Link href={link} passHref>
      <Text
        _hover={{ color: hoverColor }}
        cursor='pointer'
        padding='1rem'
        fontSize={['0.8rem', '1rem']}
        // color={clickedOn === text ? hoverColor : ''}
        // onClick={() => handleColorChange()}
      >
        {text}
      </Text>
    </Link>
  )
}
