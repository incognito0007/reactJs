import React from 'react'
import 'remixicon/fonts/remixicon.css'
import HeroText from './HeroText'
import Arrow from './Arrow'

const LeftContent = () => {
  return (
    <div className='w-full lg:w-1/3 flex flex-col gap-10 lg:gap-0 justify-between'>
        
        <HeroText />
        <Arrow />
        
    </div>
  )
}

export default LeftContent