import Head from 'next/head'
import dynamic from 'next/dynamic'
import Navbar from '../navbar.js'
import { Box, Container, Image } from '@chakra-ui/react'
import VoxelComputerLoader from '../voxel-computer-loader'
import Footer from '../footer'

// eslint-disable-next-line no-unused-vars
const LazyVoxelComputer = dynamic(() => import('../voxel-computer'), {
  ssr: false,
  loading: () => <VoxelComputerLoader />
})

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Sharath Kamlekar</title>
      </Head>

      <Navbar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        {/* <LazyVoxelComputer /> */}
        <Image src="/banner.png" alt="Banner Cover" />
        {children}
        <Footer />
      </Container>
    </Box>
  )
}

export default Main
