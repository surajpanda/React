import React, { Component } from "react";

// class Welcome extends Component {
//     render() {
//         return <h1> lass Component</h1>
//     }
// }

/* CHANGED ABOVE CODE FOR CLASS COMPONENT */

// class Welcome extends Component {
//     render() {
//         return (
//             < div >
//                 <h1>Welcome {this.props.Name} calling number {this.props.Sequence}</h1>
//                 <h2>{this.props.children}</h2>
//             </div >
//         )
//     }
// }

// USING DESTRUCTURING PROPS IN CLASS FUNCTIONAL COMPONENT
// USING IT THROUGH BREAKING THE INITIAL OBJECT
class Welcome extends Component {
    render() {
        const {Name, Sequence, children} = this.props
        return (
            < div >
                <h1>Welcome {this.props.Name} calling number {this.props.Sequence}</h1>
                <h2>{this.props.children}</h2>
            </div >
        )
    }
}


export default Welcome;