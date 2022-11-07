import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';
//import card1 from './basicnew.png';
//import card2 from './superpremiumnew.png';
//import card3 from './premiumnew.png';
//import card4 from './standardplannew.png';  
//import card5 from './Buttonicon.png';    
import card from './websitebannercards.png';  
function About() {
  return (
   <>
<div class="container">
<img src={card} alt="" style={{width:'100%'}} />
 <Link class="btn" to='/register'><b>Enquiry Now </b>&nbsp;&nbsp;<i class="fa fa-arrow-circle-right"></i></Link>
</div>
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

export default About;
