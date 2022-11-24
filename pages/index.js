import Head from 'next/head'
import Featured from '../components/Featured'
import ProductList from '../components/ProductList'

export default function Home() {

  return (
      <div>
        <Head>
          <title>Şehri Ziyafet</title>
          <meta name="description" content="İslahiye restoran" />
          <link rel="icon" type="image/x-icon" href="/favico.ico" />
        </Head>
        <Featured/>
        <ProductList/> 
      </div>
  )
}
