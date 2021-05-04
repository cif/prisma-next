import { Component } from 'react'
import '../styles/globals.css'

function MyApp({ Component, pageProps }): Partial<Component> {
  return <Component {...pageProps} />
}

export default MyApp
