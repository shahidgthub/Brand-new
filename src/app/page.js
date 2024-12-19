import Head from 'next/head'
import React from 'react'
import About from './components/About'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import Home from './components/Home'
 import Team from './components/Team'
import Work from './components/Work'

const page = () => {
  return (
    <div>
      <Header/>
      <Home/>
      <About/>
      <Work/>
      <Team/>
      <Footer/>
    </div>
  )
}

export default page