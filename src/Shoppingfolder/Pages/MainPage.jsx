import React,{useState} from 'react'
import Header from '../Components/Header'
import Collections from '../Components/Collections'
import Footer from '../Components/Footer'
import Banner from '../Components/Banner'
import { Gents,Ladies } from '../data'
import WomanCollection from '../Components/WomanCollection'
import MailNavbar from '../Components/MailNavbar'

const MainPage = () => {
    const [gentsFashion,setgentsFashion]=useState(Gents)
    const [ladiesFashion,setladiesFashion]=useState(Ladies)
    console.log(Gents)
  return (
    <div>
      <MailNavbar/>
     <Header/>
     <Banner/>
     <Collections gentsFashion={gentsFashion} />
     <WomanCollection ladiesFashion={ladiesFashion}/>
     <Footer/>
    </div>
  )
}

export default MainPage
