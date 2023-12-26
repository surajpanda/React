import React, { Component } from 'react'

export class Counter extends Component {

    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    increment() {
        // this.setState({
        //     count: this.state.count + 1
        // })
        // console.log(this.state.count)

        //TO LOG IT IN AN ASYNC WAY
        // this.setState({
        //     count: this.state.count + 1
        // }, () => console.log(this.state.count))

        //FOR GETTING THE VALUES IN PREVIOUS STATE USE PARAMETER IN SETSTATE 
        this.setState((preCount) => ({
            count: preCount.count + 1
        }))
        console.log(this.state.count)
    }
    incrementFive() {
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }

    render() {
        return (
            <div>
                <h1>count: {this.state.count}</h1>
                <button onClick={() => this.incrementFive()}>Increment</button>
            </div>
        )
    }
}

export default Counter

