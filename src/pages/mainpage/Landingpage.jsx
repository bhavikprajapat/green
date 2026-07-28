import React from 'react'
import '../../Css/landingpage.css'
import Header from './Header'
import Sec1 from './Sec1'
import Aboutmission from './Aboutmission'
import Upcomingevent from './Upcomingevent'
import Ouractivity from './Ouractivity'
import Makediffrent from './Makediffrent'
import Footer from './Footer'

const Landingpage = () => {
  return (
    <div className='' >
       <Header/> 
       <Sec1/>
       <Aboutmission/>
       <Upcomingevent/>
       <Ouractivity/>
       <Makediffrent/>
       <Footer/>
    </div>
  )
}

export default Landingpage