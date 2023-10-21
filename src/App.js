import React from "react";
import Home from "./Pages/Home"
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import NavBar from "./Component/Navbar";
import {BrowserRouter,Routes,Route} from "react-router-dom";

const App=()=>{
  return(
    <>
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route element={<Home/>} path="/"/>
        <Route element={<About/>} path="/about"/>
        <Route element={<Contact/>} path="/contact" />
        <Route element={<Login/>} path="/login" />
        <Route element={<Signup/>} path="/signup" />
      </Routes>
      </BrowserRouter>
    </>
  );

};
export default App;