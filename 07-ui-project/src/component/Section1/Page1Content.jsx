import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Page1Content = (props) => {
  return (
    <div className='pb-10 pt-6 flex flex-col lg:flex-row items-start lg:items-center gap-8 h-auto lg:h-[90vh] px-6 lg:px-18'>
        <LeftContent />
        <RightContent user={props.user} />
    </div>
  )
}

export default Page1Content