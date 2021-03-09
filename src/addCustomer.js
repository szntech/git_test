import React, { useState, useEffect } from 'react';
import "./css/add-customer-and-create-customer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, fas, faTimes } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

function AddCustomer(props) {

    return (<>
<Link to="customers" className="back-to-home"><i ><FontAwesomeIcon icon={fas,faTimes} /></i></Link>
    
    <div className="add-customer d-flex align-items-center justify-content-center">
      <div className="text-center">
        <h2>Customer Name</h2>
        <form action="new-customer-details.html">
          <input
            name="customer name"
            className="text-center my-5"
            placeholder="Ex. john doe"
            type="text"
          />
          <button className="border-0 mt-5">Create</button>
        </form>
      </div>
    </div>

    </>)
}

export default AddCustomer;