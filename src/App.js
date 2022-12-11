import Portada from './components/Principal';
import './App.css';
import React from 'react';
import {BrowserRouter, Routes, Route } from "react-router-dom";
import CurriculumCV from './components/CurriculumCV';


function App() {


  return (

  
    <BrowserRouter>
      
   <Portada>
    <Routes>
        <Route exact path='/' element={<Portada/>}/>
        <Route exact path='/curriculum' element={<CurriculumCV/>}/>
    </Routes>
  
    </Portada>
       
   

      
      </BrowserRouter>
      
       



  
   
  
    
   
       
     


    
    
  );
}

export default App;
