import React from 'react'
import Head from 'next/head'
import { Container } from '../styles/pages/Home'
import ProductList from '../components/ProductList'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Next App</title>
      </Head>
      <ProductList />
    </Container>
  )
}

export default Home
