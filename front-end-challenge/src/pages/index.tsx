import React from 'react'
import Head from 'next/head'
import { Container } from '../styles/pages/Home'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Next App</title>
      </Head>
      <h1>Hello World</h1>
    </Container>
  )
}

export default Home
