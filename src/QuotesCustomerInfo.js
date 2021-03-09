import React, { useState, useEffect } from 'react';
import "./css/quotes.css";
import "./css/side-list.css";
import "./css/navbar.css";


function QuotesCustomerInfo(props) {
    
    const {companyName,firstName,lastName,phoneNumber,cellNumber,email,city,state,zipcode}=props.info.customerInfo;
    console.log(props.info,'got company name')
    return (<>

        <div className="col-9">

            <div className="shipping-from">
                <p style={{ color: "#cfcfcf" }}>Customer Info</p>
                <h4>{companyName.toUpperCase()}</h4>
                <div className="details mt-3">
                    <div className="d-flex align-items-center my-2">
                        <h6>Full name</h6>
                        <p>{`${firstName.toUpperCase() } ${lastName.toUpperCase()}`}</p>
                    </div>
                    <div className="d-flex align-items-center my-2">
                        <h6>City</h6>
                        <p>{city.toUpperCase()}</p>
                    </div>
                    <div className="d-flex align-items-center my-2">
                        <h6>State</h6>
                        <p>{state.toUpperCase()}</p>
                    </div>
                    
                    <div className="d-flex align-items-center my-2">
                        <h6>Zipcode</h6>
                        <p>{zipcode}</p>
                    </div>
                    <div className="d-flex align-items-center my-2 mt-4">
                        <h6>Phone</h6>
                        <p>{phoneNumber}</p>
                    </div>
                    <div className="d-flex align-items-center my-2">
                        <h6>Cell Number</h6>
                        <p>{cellNumber}</p>
                    </div>

                    <div className="d-flex align-items-center my-2">
                        <h6>email</h6>
                        <p>{email.toUpperCase()}</p>
                    </div>
                    <div className="d-flex align-items-center my-4">
                        <h6>Date:</h6>
                        <p>Jan 15, 2021</p>
                    </div>
                </div>
                <div className="button-box mt-2">
                    <a
                        onClick={()=>props.setEdit("edit")}
                        className="btn btn-outline-danger bg-white"
                    >Edit</a
                    >
                </div>
            </div>

        </div>



    </>)
}
export default QuotesCustomerInfo;