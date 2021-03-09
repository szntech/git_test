import React, { useState, useEffect } from 'react';
import Quote from './Quote'
import Img from './Capture3.PNG'
import Img2 from './Capture2.png'
import Img4 from './Capture4.PNG'

function Customer(props) {


    return(<>
    <header></header>
   <div className='navBar'>
       <ul>
           <li><img src={Img2}></img></li>
           <li><img src={Img}></img></li>
           <li><img src={Img4}></img></li>
       </ul>
   </div>

<Quote/>
    
   
    </>)
}

export default Customer