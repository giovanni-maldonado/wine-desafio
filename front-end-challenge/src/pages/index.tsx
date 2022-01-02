import React from 'react'
import Head from 'next/head'
import { Container } from '../styles/pages/Home'
import Header from '../components/Header'

const Home: React.FC = () => {
  return (
    <Container>
      <Header />
      <Head>
        <title>Wine App</title>
      </Head>
      <h1>Hello World</h1>
    </Container>
  )
}

export default Home
