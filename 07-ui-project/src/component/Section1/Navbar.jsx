import React from 'react'

const Navbar = () => {
  return (
    <div className='flex flex-col sm:flex-row gap-4 sm:gap-0 items-start sm:items-center justify-between py-6 px-6 lg:px-18'>
        <h4 className='bg-black text-white px-6 py-2 uppercase rounded-full'>Target audience</h4>
        <button className='bg-gray-200 px-6 py-2 uppercase rounded-full tracking-widest text-sm'>Digital Banking Platform</button>
    </div>
  )
}

export default Navbar