import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className='parent'>
      <Card user={{ name: 'Ankit Anand', bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', img: 'https://images.unsplash.com/photo-1768479397383-49806c934167?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDc5fENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D' }} />
      <Card user={{ name: 'John Doe', bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', img: 'https://images.unsplash.com/photo-1730449819838-a5018d63e79e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDkxfENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D' }} />
    </div>
  )
}

export default App