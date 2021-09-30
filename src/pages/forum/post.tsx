import Head from 'next/head'
import { GetStaticProps, GetStaticPaths } from 'next'
import { Flex, Text,  AspectRatio } from '@chakra-ui/react'
import { CourseBanner } from '../../components/CourseBanner'

//need to change the name of the file to [title]
export default function ForumPost() {
  return (
    <Flex flexDirection='column' padding='2rem' margin='0 auto' maxW='1080px' >
      <Text
        fontSize={['1.5rem', '2rem']}
        //color will be changged according to the type of the title
        color='green.400'
      >
        Teste para saber se esta tudo Funcionanod
      </Text>
      <Text color='gray.400' textAlign='justify' margin='2rem 0'>
        aoidioadioahdpwah oiqhdfp poiwhv pihvpioaevo hsafeodv sadkv bhawv baivb
        asb owav ajbv opawhvn wjoabpasn vojaebvpawbnv ojwbv piaefnvowabv paebov
        hwpov naeroih vopwenv oladfbvp awbv oabipvb awkjvb pianbv kjsabvi sdbnv
        ksabv losadfbv osdbv lsabo bbd voabnv lkjbvodsbnv jkbwop BFVOASBV LDBV
        Osidh oWBV OIwbv owibv owabv sav wv wv V \SV We gvVWRBHb
      </Text>
      <AspectRatio ratio={1} marginBottom='2rem'>
        <iframe
          title='naruto'
          src='https://www.youtube.com/embed/QhBnZ6NPOY0'
          allowFullScreen
        />
      </AspectRatio>
      <CourseBanner
        titleColor='green.400'
        image='/course.png'
        title='Melhor curso do brasil'
        description='aeroih vopwenv oladfbvp awbv oabipvb awkjvb pianbv kjsabvi sdbnv
        ksabv losadfbv osdbv lsabo bbd voabnv lkjbvodsbnv jkbwop BFVOASBV LDBV
        Osidh oWBV OIwbv owibv owabv sav wv wv V \SV We gvVWRBbo bbd voabnv lkjbvodsbnv jkbwop BFVOASBV LDBV
        Osidh oWBV OIwbv owibv owabv sav wv wv V \SV We gvVWRBbo bbd voabnv lkjbvodsbnv jkbwop BFVOASBV LDBV
        Osidh oWBV OIwbv owibv owabv sav wv wv V \SV We gvVWRBHb'
      />
    </Flex>
  )
}

//Get the title of the Post and add to the path
// export const getStaticPaths: GetStaticPaths = async () => {
//     const { data } = await api.get('posts')

//     return {
//       paths,
//       fallback: 'blocking',
//     }
//   }
