import React from 'react'
import Head from 'next/head'
import { Container } from '../styles/pages/Home'
import ProductList from '../components/ProductList'
import Header from '../components/Header'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Wine App</title>
      </Head>
      <Header />
      <ProductList />
    </Container>
  )
}

export default Home
