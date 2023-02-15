// import React, { useState } from 'react'
import Nav from '../Nav/Nav'
import LeftNav from "../Nav/LeftNav"
import RightNav from "../Nav/RightNav"
import Center from "./Center"
 import classes from "./Home.module.scss"

 
function Home() {


  
  return (
    <div className={classes.home}>
     
         <Nav/>
        <LeftNav/>
        <Center  />
    
        <RightNav/>
    </div>
  )
}

export default Home