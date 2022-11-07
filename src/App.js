import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import card1 from './basicnew.png';
//import card2 from './superpremiumnew.png';
//import card3 from './premiumnew.png';
//import card4 from './standardplannew.png';  
//import card5 from './Buttonicon.png';    
//import card from './websitebannercards.png';  
import Register from './register';
import About from './about';
function App() {
  return (
   <>
    <Router>
    <Routes>
    <Route path='/' exact element={<About />} ></Route>
        <Route path='/register' element={<Register />}></Route>
        
      </Routes>
    </Router>
{/* <div class="container">
<img src={card} alt="" style={{width:'100%'}} />
 <button class="btn"><b>Enquiry Now </b>&nbsp;&nbsp;<i class="fa fa-arrow-circle-right"></i></button>
</div> */}
{/* <div class="row" style={{marginLeft:'25%'}}>
  <div class="column" style={{marginTop:'20%'}}>
    <img class="image" src={card2} alt=""  />
    <img   src={card5} alt="" style={{width:'20%'}} />
  </div>
  <div class="column" style={{marginTop:'20%'}}>
    <img class="image" src={card3} alt="" />
  </div> </div><div class="row" style={{marginLeft:'25%' }}>
  <div class="column">
    <img  class="image" src={card4} alt=""  />
  </div>
  <div class="column">
    <img  class="image" src={card1} alt="" />
  </div> </div>
  <div class="row" style={{marginLeft:'25%' }}>
  <div class="column">
  </div>
  <div class="column">
  </div> </div><div class="row" style={{marginLeft:'25%',marginTop:'6.5%' }}>
  <div class="column">
  
  </div>
  <div class="column">
  <div class="submitButton" style={{}}>
    <img class="image" src={card5} alt=""  />
  </div>
  </div> 
 </div>
  */}
{/*<div class="teachFeatureOuter teachFeatureOuterRev">
    <div class="pharmaprocess">
        <div class="processImage"><img src={card1} alt=""  /></div>
       
    </div>
    <div class="pharmaprocess">
    
        <div class="processImage"><img src={card2} alt="" /></div>
     
            
    </div>
    <div class="pharmaprocess">
    <div class="processImage"><img src={card3} alt="" /></div>
       
    </div>
    <div class="pharmaprocess">
    
        <div class="processImage"><img src={card4} alt=""  /></div>
    
        </div>
  </div>*/}
</>
  );
}

export default App;
