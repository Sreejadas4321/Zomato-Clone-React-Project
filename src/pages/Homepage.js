import React, { useState } from 'react'
import Header from '../components/header/header'
import Footer from '../components/footer/footer'
import Taboption from '../components/tabOption/tabOption'

import Delivery from '../components/Delivery/Delivery'
import DiningOut from '../components/DiningOut/DiningOut'
import NightLife from '../components/Nightlife/NightLife'
import { useLocation } from 'react-router-dom'

export default function Homepage() {
const {state} = useLocation()

  const[active, setActive]=useState(state && state.name ? state.name : "Delivery")

  return (<>
    <Header/>
    <Taboption active={active} setActive={setActive} />
    {getCorretScreen(active)}
    <Footer/>
    </>
  )
}
const getCorretScreen=(tab)=>{
  switch (tab) {
    case "Delivery":
      return  <Delivery/>
      case "Dining Out":
      return <DiningOut/>
      case "Nightlife":
      return <NightLife/>

    default:
      return <Delivery/>
  }
}
