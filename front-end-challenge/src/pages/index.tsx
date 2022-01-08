import React from 'react'
import Head from 'next/head'
import { Container } from '../styles/pages/Home'
import ProductList from '../components/ProductList'
import Header from '../components/Header'
import FilterCatalog from '../components/FilterCatalog'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Wine App</title>
      </Head>
      <Header/>
      <ProductList />
      <FilterCatalog />
    </Container>
  )
}

export default Home
