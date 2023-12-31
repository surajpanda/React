import React from 'react'
import './myStyles.css'

function Stylesheet(props) {
    console.log(props.condition);
    let classNames = props.condition ? 'primary' : ''

    return (
        <div>
            <h1 className={`${classNames} font-xl`} >Stylesheets</h1>
        </div>
    )
}

export default Stylesheet
