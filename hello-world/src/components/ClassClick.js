import React, { Component } from 'react'

class ClassClick extends Component {

    ClickHandler() {
        console.log('click me triggered')
    }

    render() {
        return (
            <div>
                <button onClick={this.ClickHandler}>Clcik Me</button>
            </div>
        )
    }
}

export default ClassClick
