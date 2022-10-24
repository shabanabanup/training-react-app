// //import logo from './logo.svg';
// import './App.css';
// import React from 'react';
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
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

// export default App;
// import React from 'react';
// import './App.css';
// import NavBar from './Components/NavBar';
// import HomeComp from './Components/Home';
// //FuncComp - alias - start with an Uppercase

// import FuncComp from './Components/Functional';
// import ClassComp from './Components/ClassComponent';
// //Page Not Found Component
// import PageNotFound from './Components/PageNotFound';
// // //Props in React
// // import Emp from './Components/Props';
// // //Map function with array
// // import Fetch_empdetails from './Components/Map';
// // //Hooks
// // import UserDetails from './Components/Hook';
// // //Configure the routing paths 
// import { Route,Routes } from 'react-router-dom';

// function App() {
//   // return (
//   //   <div>
//   //     <NavBar/>
      
//   //     {/* Welcome to Online Training : <Emp empname="John"></Emp> */}
//   //    <Routes>
//   //     <Route path="funcom" element={<FuncComp/>}></Route>
//   //     <Route path="classcom" element={<ClassComp/>}></Route>
//   //     {/* <Route path="map" element={<Fetch_empdetails/>}></Route>
//   //     <Route path="props" element={<Emp empname="John" empid="100" empdesignation="Admin"></Emp>}></Route> */}
//   //     <Route path="*" element={<PageNotFound/>}></Route>
//   //    </Routes>
//   //   </div>
//   // );
//   return (
//     <div>
//       {/* <a className="App-link" href="https://dreams-be73a.web.app" target="_blank" rel="noopener noreferrer"> Buy now!!! </a> */}
//       <NavBar/>
//      <Routes>
//       <Route path="home" element={<HomeComp/>}></Route>
//       <Route path="funcom" element={<FuncComp/>}></Route>
//       <Route path="classcom" element={<ClassComp/>}></Route>
//       <Route path="*" element={<PageNotFound/>}></Route>
//      </Routes>
//     </div>
//   );
// }

// export default App;
// import logo from './logo.svg';
import './App.css';
import React from 'react';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import PageNotFound from './Components/PageNotFound';
import { Services } from './Components/Services';
import Contact from './Components/Contact';
import { Footer } from './Components/Footer';
import { Map } from './Components/map';


import {Route, Routes} from 'react-router-dom';


function App() {
  return (
    <>
      <NavBar/>
      <Home/>
     <Services></Services>
     <Contact/>
     <Map/>
     <Footer/>
     {/* <Routes>
      <Route path="home" element={<HomeComp/>}></Route>
      <Route path="*" element={<PageNotFound/>}></Route>
     </Routes> */}
    </>
  );
  
}

export default App;