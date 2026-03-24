import React from 'react'

const Card = () => {
    const name = 'Ankit Anand'

    return (
        <div>
            <div className='card'>
                <h1>Card Component</h1>
                <p>This is a simple card component, created by {name}.</p>
            </div>
        </div>
    )
}

export default Card