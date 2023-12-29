import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';

/*CHANING ABOVE IMPORT TO PROVE DEFAULT COMPONENT WORKS WITH ANY COMPONENT NAME (it should start with upper case) */
import MyComponent from './components/Greet';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';

/*IMPORTING ONLY GREET TAG SINCE THAT IS THE ONLY COMPONENT EXPORTED */
// import { Greet } from './components/Greet';

/* IT ALREADY CAME AS A PART OF THE PROJECT */
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Hello World!
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

/* BELOW CODE IS CONVERTED TO ES6 CODE REFERING YOUTUBE */
// class App extends Component{
//   render(){
//     return(
//           <div className="App">
//           <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//             <p>
//               Hello World!
//             </p>
//             <a
//               className="App-link"
//               href="https://reactjs.org"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );    
//   }
// }

/* CHANGED TO BELOW CODE FROM ABOVE FOR USING FUNCTIONAL COMPONENT (USING GREET.JS) */
// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <Greet />
//         <Welcome />
//       </div >
//     );
//   }
// }

/* CHANGED BELOW CODE FROM ABOVE FOR ES6 FUNCTION (USING GREET.JS)*/
// class App extends Component {
//   render() {
//     return (
//       <div className="App">    
//         <MyComponent/>
//       </div>
//     );
//   }
// }

/* CHANGED BELOW CODE FROM ABOVE FOR USING ONLY EXPORT GREET TAG*/
// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <Greet />
//       </div>
//     );
//   }
// }

/* making changes for welcome.js */
// class App extends Component {
//   render() {
//     return (
//       <Hello />
//     );
//   }
// }

/*MAKING CHANGES FOR PROPS JSX */
// class App extends Component {
//   render() {
//     return (
//       <div className='App'>
//         {/* <Greet Name="Shritik" Sequence="0" />
//         <Greet Name="Shritik1" Sequence="1" />
//         <Greet Name="Shritik2" Sequence="2" /> */}

//         {/* <Greet Name="Shritik" Sequence="0" >child element for 0</Greet>
//         <Greet Name="Shritik1" Sequence="1" >child element for 1</Greet>
//         <Greet Name="Shritik2" Sequence="2" >child element for 2</Greet>

//         <Welcome Name="Shritikwelcome" Sequence="0" >child element for 0</Welcome>
//         <Welcome Name="Shritikwelcome1" Sequence="1" >child element for 1</Welcome>
//         <Welcome Name="Shritikwelcome2" Sequence="2" >child element for 2</Welcome> */}

//         {/*CONSTRUCTORS AND ONCLICK EVENT CHANGE*/}
//         {/* <Message /> */}

//       </div>
//     )
//   }
// }


//SETSTATE CODE
// export class App extends Component {
//   render() {
//     return (
//       <div className='App'>
//         <Counter/>
//       </div>
//     )
//   }
// }

//DESTRUCTURING PROPS
// export class App extends Component {
//   render() {
//     return (
//       <div className='App'>
//        <Greet Name="Shritik 2" Sequence="2" >child element for 1</Greet>
//        <Welcome Name="Shritikwelcome" Sequence="0" >child element for 0</Welcome>
//       </div>
//     )
//   }
// }

//USING CLICK EVENT HANDLER
// class App extends Component {
//   render() {
//     return (
//       <div className='App' >
//         <FunctionClick />
//         <ClassClick />
//       </div>
//     )
//   }
// }

//USING CLICK EVENT BINDING
class App extends Component {
  render() {
    return (
      <div className='App' >
        <EventBind />
      </div>
    )
  }
}


export default App;
