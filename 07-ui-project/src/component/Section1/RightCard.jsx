import React from 'react'
import RightCardContent from './RightCardContent'

const RightCard = (props) => {
  return (
    <div className='h-75 sm:h-87.5 lg:h-full w-64 sm:w-72 lg:w-80 shrink-0 overflow-hidden relative rounded-4xl'>
        <img className='h-full w-full object-cover' src={props.user.img} alt="" />

        <RightCardContent user={props.user}/>
    </div>
  )
}

export default RightCard