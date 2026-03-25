import React from 'react'
import Section1 from './component/Section1/Section1'

const App = () => {

  const users = [
    {
      img: "https://plus.unsplash.com/premium_photo-1771840856716-b9ade607d935?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      id: 1,
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, voluptatem.",
      tag: "Satisfied"
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1661775190861-2dc4e2c223fa?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      id: 2,
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, voluptatem.",
      tag: "Underserved"
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1661722243182-ac6e3f12d879?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      id: 3,
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, voluptatem.",
      tag: "Underbanked"
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1661591104970-b66c56160275?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      id: 4,
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, voluptatem.",
      tag: "Underbanked"
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1661645312997-53c1204fae36?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      id: 5,
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, voluptatem.",
      tag: "Underbanked"
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1661720579227-03d3a1da61d9?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      id: 6,
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, voluptatem.",
      tag: "Underbanked"
    }
  ]

  return (
    <div>
      <Section1 user={users} />
    </div>
  )
}

export default App