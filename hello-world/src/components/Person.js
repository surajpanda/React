import React from 'react'

function Person({personDetails}) {
    return (
        <div>
            <div>Hi, My name is {personDetails.name}. I am {personDetails.feature} & I know {personDetails.skill}</div>
        </div>
    )
}

export default Person

