import React, { Component } from "react";

class Message extends Component {

    // constructor() {
    //     super()
    //     this.state = {
    //         message: 'Welcome Visitor Shritik'
    //     }   

    // }

    // changeMessage() {
    //     this.setState = ({
    //         message: 'Thank you for subscribing'
    //     })
    // }

    // render() {
    //     return (
    //         <div>
    //             {/* <h1> Welcome Visitor</h1> */}
    //             <h1>{this.state.message}</h1>
    //             <button onClick={() => this.changeMessage} >Subscribe</button>
    //         </div>
    //     )
    // }



    /*VIDEO CODE WAS NOT WORKING SO GOT IT FROM STACK OVERFLOW */
    state = {
        message: 'Welcome Shritik'
      }
    
      changeMessage = () => {
        this.setState({
          message: 'Thank You Shritik'
        })
      }
    
      render() {
        return (
          <div>
            <h1>{this.state.message}</h1>
            <button onClick={this.changeMessage}>Subscribe</button>
          </div>
        )
      }

}

export default Message;