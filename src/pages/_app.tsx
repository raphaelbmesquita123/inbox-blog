import { AppProps } from 'next/app'
import customTheme from '../styles/theme'
import { ToastContainer } from 'react-toastify'

//styles
import 'react-toastify/dist/ReactToastify.css'

//providers
import { ChakraProvider } from '@chakra-ui/react'
import { UserContextProvider } from '../context/userContext'

//components
import { PriceMarketWidget } from '../components/CoingeckoWidget/PriceMarketWidget'
import { Header } from '../components/Header'
import { Banner } from '../components/Banner'
import { Menu } from '../components/Menu'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UserContextProvider>
      <ChakraProvider resetCSS theme={customTheme}>
        <ToastContainer
          position='bottom-right'
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme='colored'
        />
        <Header />
        <Banner src='gilvanYoutube.png'></Banner>
        <PriceMarketWidget />
        <Menu />
        <Component {...pageProps} />
      </ChakraProvider>
    </UserContextProvider>
  )
}

export default MyApp
