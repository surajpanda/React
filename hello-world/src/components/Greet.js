import React, { Component } from "react";

/* STATELESS */
// function Greet(){
//     return <h1>Hello Shritik</h1>
// }


/* STATEFUL */
// const Greet = () => <h1>Hello Shritik</h1>


/* USING PROPS IN JSX Functional component*/
const Greet = (props) => {
    console.log(props)
    return (
        <div>
            <h1>Welcome {props.Name} calling number {props.Sequence}</h1>
            {props.children}
        </div>
    )
}


export default Greet;

/*We can import only component like below code */
// export const Greet = () => <h1>Hello Shritik</h1>

