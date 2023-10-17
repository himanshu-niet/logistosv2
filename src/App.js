import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/login";
import Register from "./pages/register";
import ErrorPage from "./pages/ErrorPage";
import Policy from "./pages/Policy";
import Term from "./pages/Term";
import Refund from "./pages/Refund";
import AdminLogin from "./pages/AdminLogin";

function App() {

  const [status,setStatus]=useState(true);


  useEffect(()=>{
getStatus();
  },[])

  const getStatus=async()=>{
    const data= await fetch("https://logistos.phfngo.org.in/");
    
    const res= await data.json();
    setStatus(res);
  }
  

  if(!status){
   return <ErrorPage/>
  }

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/signin" element={<Login />} />
        <Route exact path="/admin" element={<AdminLogin />} />
        <Route exact path="/signup" element={<Register />} />
        <Route exact path="/policy" element={<Policy />} />
        <Route exact path="/tc" element={<Term />} />
        <Route exact path="/refund" element={<Refund />} />


        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );

}
export default App;
