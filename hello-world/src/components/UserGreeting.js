import React, { Component } from 'react'

/* FOR EXPRESSION THERE ARE 4 CONDITION EXPRESSION
1.IF ELSE
2.VARIABLE
3.TERNARY
4.SHORT CIRCUIT
*/

class UserGreeting extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isLoggedIn: false
        }
    }


    render() {

        {/* 1.IF ELSE */ }
        // if (this.state.isLoggedIn)
        //     return (<div>Welcome Shritik</div>)
        // else {
        //     return (<div>Welcome Guest</div>)
        // }

        {/* 2.VARIABLE*/ }
        // let message
        // if (this.state.isLoggedIn)
        //     message = <div>Welcome Shritik</div>
        // else
        //     message = <div>Welcome Guest</div>

        // return message;

        {/* 3.TERNARY*/ }
        // return this.state.isLoggedIn ? <div>Welcome Shritik</div> : <div>Welcome Guest</div>

        {/* 4.SHORT CIRCUIT*/ }
        return this.state.isLoggedIn && <div>Welcome Shritik</div>
        // return (
        //     <div>
        //         <div>Welcome Shritik</div>
        //         <div>Welcome Guest</div>
        //     </div>
        // )
    }
}

export default UserGreeting
