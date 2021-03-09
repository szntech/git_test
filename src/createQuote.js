import React, { useState, useEffect } from 'react';
import "./css/add-customer-and-create-customer.css";
import "./css/common.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,fas, faTimes } from '@fortawesome/free-solid-svg-icons'

function QuoteDetails(props) {

  const [individualMode, setIndividualMode] = useState(true);

const masterMode=<div class="master-mode-content text-start my-5">
<h4>Apartments title</h4>
<input
  type="text"
  class="w-100 bg-light border-0 apartments-input my-3 text-dark"
  placeholder="Example"
/>
<button
  class="w-100 border-0 add-apartments-btn my-3 text-center"
>
  Add a new Apartment
</button>
</div>

    return <> <a href="home" class="back-to-home"><i className="times"><FontAwesomeIcon icon={fas,faTimes}  /></i></a>
   
    <div
      class="create-quote row d-flex align-items-center justify-content-center"
    >
      <div class="col-lg-8 col-xl-6 container text-center">
        <h2>Quote Title</h2>
        <form action="quotes">
          <input
            name="quote title"
            class="text-center my-5"
            placeholder="Ex. Qubic Company Quote"
            type="text"
          />
       
          <div class="col- 7 col-xxl-5 m-auto">
            <div class="mode">
            
              <div
                class="mode-toggle d-flex align-items-center justify-content-around"
              >
                <p class="text-end me-5 master-mode-p">Master Mode</p>
                <input class="toggle-mode-checkbox" type="checkbox" defaultChecked='true' onChange={(e)=>console.log(setIndividualMode(e.target.checked))}/>
                <p class="text-start ms-5 individual-mode-p">Individual mode</p>
              </div>
         
              {!individualMode&&masterMode}
            </div>
          </div>
          <button class="border-0 mt-5">Create</button>
        </form>
      </div>
    </div></>
}

export default QuoteDetails;