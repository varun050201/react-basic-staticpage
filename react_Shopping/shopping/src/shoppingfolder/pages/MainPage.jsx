

import React, {useState} from 'react'
import Header from '../components/Header'
import Banner from '../components/Banner'
import Collections from '../components/Collections'
import Fotter from '../components/Fotter'

import {Gents, Ladies} from '../data'
import WomanCollection from '../components/WomanCollection'

const MainPage = () => {

  const [gentsFashion, setGentsFashion] = useState(Gents)
  const [ladiesFashion, setLadiesFashion] = useState(Ladies)

  console.log(Gents)

  return (
    <div>
        <Header />
        <Banner />
        <Collections gentsFashion= {gentsFashion}/>
        <WomanCollection ladiesFashion = {ladiesFashion} />
        <Fotter />
    </div>
  )
}

export default MainPage