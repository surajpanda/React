import React from 'react'
import Person from './Person'

function NameList() {

    // var names = ['Shritik1', 'Shritik2', 'Shritik3']
    // return names.map(x => <div>My Name is {x}</div>)
 
    const persons = [
        {
            id: 1,
            name: 'Shritik0',
            feature: 'Cute',
            skill: 'React'
        },
        {
            id: 2,
            name: 'Shritik1',
            feature: 'Intelligent',
            skill: 'Angular'
        },
        {
            id: 3,
            name: 'Shritik2',
            feature: 'Smart',
            skill: 'Dot Net'
        },
        {
            id: 4,
            name: 'Shritik3',
            feature: 'Strong',
            skill: 'Java'
        },
    ]

    //WRTING BELOW CODE DIRECTLY IN SAME COMPONENT SO
    //IDLE WAY IS TO CREATE PERSON/CHILD COMPONENT TO DEAL WITH SUCH SITUATION
    //return persons.map(person => <div>Hi, My name is {person.name}. I am {person.feature} & I know {person.skill}</div>)

    //CREATING PERSON/CHILD COMPONENT
    return persons.map(person => <Person key={person.id} personDetails={person} />)


}

export default NameList
