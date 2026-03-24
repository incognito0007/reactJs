import React from 'react'

const Card = (props) => {
  return (
    <div className="card">
        <img src={props.user.img} alt="" />
        <h1>{props.user.name}</h1>
        <p>{props.user.bio}</p>
        <button>View Profile</button>
      </div>
  )
}

export default Card