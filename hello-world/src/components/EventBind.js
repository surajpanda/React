import React, { Component } from 'react'

/* THERE ARE FOUR METHODS FOR EVENT BINDING */
/*1. BINDING this IN THE ONCLICK EVENT WITH KEYWORD 'Bind'
  2. USING THE METHOD '()' FUNCTION IN THE CURLY BRACKETS
  3. USING 'Bind' IN THE CONSTRUCTOR
  4. WHILE IMPLEMENTING FUNCTION USE METHOD '()' */

class EventBind extends Component {
    constructor(props) {
        super(props)

        this.state = {
            message: 'Welcome Shritik'
        }

        /* 3. USING 'Bind' IN THE CONSTRUCTOR */
        // this.ClickEvent = this.ClickEvent.bind(this);
    }

    //METHOD 1,2 & 3 uses below code to call
    ClickEvent() {
        this.setState({
            message: 'Thank you Shritik'
        })
        console.log(this)
    }

    ClickEventMthd4 = () => {
        this.setState({
            message: 'Thank you Shritik'
        })
        console.log(this)
    }

    render() {
        return (
            <div>
                <div><h1>{this.state.message}</h1></div>
                {/* BELOW CODE WOULD THROW ERROR SINCE WE ARE USING PARENTHESES */}
                {/* <button onClick={this.ClickEvent()}>Click 0</button> */}

                {/* 1. BINDING this IN THE ONCLICK EVENT WITH KEYWORD 'Bind' */}
                <button onClick={this.ClickEvent.bind(this)}>Click 1</button>
                <br />
                <br />
                {/* 2. USING THE METHOD '()' FUNCTION IN THE CURLY BRACKETS */}
                <button onClick={() => this.ClickEvent()}>Click 2</button>
                <br />
                <br />
                {/* 3. USING 'Bind' IN THE CONSTRUCTOR UNCOMENT THE CODE IN CONSTRUCTOR */}
                <button onClick={this.ClickEvent}>Click 3</button>
                <br />
                <br />
                {/* 4. WHILE IMPLEMENTING FUNCTION USE METHOD '()' */}
                <button onClick={this.ClickEventMthd4}>Click 4</button>

            </div >
        )
    }
}

export default EventBind

