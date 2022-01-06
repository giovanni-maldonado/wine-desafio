import React from 'react'
import Head from 'next/head'
import { Container } from '../styles/pages/Home'
import ProductList from '../components/ProductList'
import store from '../redux/store/index'
import { Provider } from 'react-redux'
import Header from '../components/Header'

const Home: React.FC = () => {
  return (
    <Provider store={store}>
      <Container>
        <Head>
          <title>Next App</title>
        </Head>
        <Header/>
        <ProductList />
      </Container>
    </Provider>
  )
}

export default Home
