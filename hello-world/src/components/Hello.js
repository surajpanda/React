import React from "react";

/*USING JSX */
// const Hello = () => {
//     return(
//         <div className="App">
//             <h1>Hello Shritik</h1>
//         </div>
//     )
// }

/* USING CLASS */ 
const Hello = () => {
    return React.createElement('div',{className:"App", id:"hello"}, React.createElement('h1',{id:'testh1'},'Hello Shritik'));
}

export default Hello;