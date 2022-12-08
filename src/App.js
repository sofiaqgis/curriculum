import Portada from './components/Principal';
import './App.css';
import { Routes, Route, BrowserRouter} from "react-router-dom";
import CurriculumCV from './components/CurriculumCV';
import React from 'react';


function App() {


  return (

   <BrowserRouter>
  
  <Portada />
<Routes>
    <Route exact path='/' element={<Portada/>}/>
    <Route exact path='/curriculum' element={<CurriculumCV/>}/>
</Routes>

  
   
   </BrowserRouter>
    
   
       
     


    
    
  );
}

export default App;
