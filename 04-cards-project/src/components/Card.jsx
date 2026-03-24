import React from 'react'
import { Bookmark } from 'lucide-react'

const Card = (props) => {
  return (
    <div className="card">

        <div>
          <div className="top">
          <img src={props.Job.img} alt={props.Job.title} />
          <button>Save <Bookmark size={12} /> </button>
        </div>

        <div className="center">
          <h3>{props.Job.title} <span>{props.Job.postDate}</span></h3>
          <h2>{props.Job.description}</h2>
          <div className='tag'>
            <h4>{props.Job.JobType}</h4>
            <h4>{props.Job.Experience}</h4>
          </div>
        </div>
        </div>

        <div className="bottom">
          <div>
            <h3>{props.Job.salary}</h3>
            <p>{props.Job.location}</p>
          </div>
          <button>Apply Now</button>
        </div>
      </div>
  )
}

export default Card