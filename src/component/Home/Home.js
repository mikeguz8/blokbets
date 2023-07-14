import React from 'react'
import useTitle from '../../Router/useTitle'
import Facts from './Facts'
//import Hero from './Hero'
import HeroImage from './HeroImage'
import Team from './Team'
import Works from './Works'

const Home = () => {

  useTitle('Home')
  return (
    <div className=' text-white'>
      
          
          
          <Works></Works>
          <HeroImage></HeroImage>
          <Facts></Facts>
          <Team></Team>

    </div>
  )
}

export default Home