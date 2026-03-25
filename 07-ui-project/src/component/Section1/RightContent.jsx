import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
    return (
        <div
            id='right'
            className='h-full flex flex-nowrap gap-10 overflow-hidden rounded-4xl w-2/3 p-6'
        >
            <div className="scroll-track flex flex-nowrap gap-10">

                {props.user.map((user) => (
                    <RightCard key={user.id} user={user} />
                ))}

                {/* duplicate for smooth loop */}
                {props.user.map((user) => (
                    <RightCard key={"dup-" + user.id} user={user} />
                ))}

            </div>
        </div>
    )
}

export default RightContent