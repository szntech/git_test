import React, { useState, useEffect } from 'react';
import "./css/quotes.css";
import "./css/side-list.css";
import "./css/navbar.css";
import CustomerInfo from "./QuotesCustomerInfo";


function NewOld(props) {

    return (<>

        <div className="col-9">
            <h4>Customer Type</h4>
            <div className="buttons mt-4">
                <a
                   
                    className="btn btn-primary px-5 py-2 me-3"
                >Current Customer</a
                >
                <a
                  
                    className="btn btn-outline-primary px-5 py-2 me-3"
                >Existing Customer</a
                >

                <a
                   onClick={()=>props.setEdit('NewCustomer')}
                    className="btn btn-outline-primary px-5 py-2"
                >New Customer</a
                >
            </div>
        </div>


    </>)

}

export default NewOld;