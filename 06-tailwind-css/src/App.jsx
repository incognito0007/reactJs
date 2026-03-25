import React from 'react'

const App = () => {
  return (
    <div className='flex items-center justify-center h-screen bg-gray-300'>
      <h1 className='text-3xl font-bold underline text-center text-blue-500'>
        Hello world!
      </h1>
      <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
        Click me!
      </button>
    </div>  
  )
}

export default App