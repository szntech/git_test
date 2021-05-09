import React, { useState, useEffect } from 'react';
import { BrowserRouter, Redirect, Link, Route, Switch, useHistory } from 'react-router-dom';
import "./css/side-list.css";
import "./css/navbar.css";
import "./css/customer.css";



function CustomerInfoPage(props) {

    const { customerInfo, setCustomerInfo,setShowEdit,showEdit} = props;

    console.log(props.selectedCustomer,"props.selectedCustomer")

    

    
    const [customerInfoEdit, setCustomerInfoEdit] = useState(customerInfo);
    const [buttonText, setButtonText] = useState('Edit');


    const myChangeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        const tempData = { ...customerInfoEdit };
        tempData[nam] = val;

        setCustomerInfoEdit(tempData);
        //  console.log(tempData)
        //  this.setState({[nam]: val});
    }


    useEffect(()=>{
        setCustomerInfoEdit(customerInfo)
    },[showEdit,customerInfo])

    

    const mySubmitHandler = (event) => {
        event.preventDefault();


        if(props.selectedCustomer==="newCustomer"){
         
            fetch(`${global.config.host}/customerDetail`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(customerInfoEdit)
            }).then(res => res.json())
                .then(res => {
    
                    setCustomerInfo(customerInfoEdit)
                    setShowEdit(false)
                    props.setSelectedCustomer({RelatedCustomer:res[0].insertId})
                    props.setRefreshCustomerList(!props.refreshCustomerList)
                });
         


        }else{
        

        fetch(`${global.config.host}/updateCustomer`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(customerInfoEdit)
        }).then(res => res.json())
            .then(res => {

                setCustomerInfo(customerInfoEdit)
                setShowEdit(false)
            });
        }
    }

    const display = showEdit === false ? <div className="row mt-4">
        <div className="col-6">
            <div className="details">
                <div className="d-flex align-items-center my-2">
                    <h6>Full name</h6>
                    <p>{`${customerInfo.firstName} ${customerInfo.lastName}`}</p>
                </div>
                <div className="d-flex align-items-center my-2">
                    <h6>Company Name</h6>
                    <p>{`${customerInfo.companyName}`}</p>
                </div>
                
                <div className="d-flex align-items-center my-2">
                    <h6>Phone Number</h6>
                    <p>{`${customerInfo.phoneNumber}`}</p>
                </div>

                <div className="d-flex align-items-center my-2">
                    <h6>Cell Number</h6>
                    <p>{`${customerInfo.cellNumber}`}</p>
                </div>
                <div className="d-flex align-items-center my-2">
                    <h6>email</h6>
                    <p>{`${customerInfo.email}`}</p>
                </div>
            </div>
        </div>
        <div className="col-6">
            <div className="details">
            <div className="d-flex align-items-center my-2">
                    <h6>Last Name</h6>
                    <p>{`${customerInfo.lastName}`}</p>
                </div>
                <div className="d-flex align-items-center my-2">
                    <h6>Address</h6>
                    <p>{`${customerInfo.address}`}</p>
                </div>
                <div className="d-flex align-items-center my-2">
                    <h6>City</h6>
                    <p>{`${customerInfo.city}`}</p>
                </div>
                <div className="d-flex align-items-center my-2">
                    <h6>State</h6>
                    <p>{`${customerInfo.state}`}</p>
                </div>
                <div className="d-flex align-items-center my-2">
                    <h6>Postal Code</h6>
                    <p>{`${customerInfo.postalCode}`}</p>
                </div>
            </div>
        </div>
    </div> : <form onSubmit={mySubmitHandler}>

        <input
            required
            type="text"
            name="firstName"
            placeholder="First Name"
            className="border-0 p-2 new-quote-new-customer-input"
            value={customerInfoEdit.firstName}
            onChange={myChangeHandler}
        />
        <input
            required
            type="text"
            name="lastName"
            placeholder="Last Name"
            className="border-0 p-2 new-quote-new-customer-input ms-3"
            value={customerInfoEdit.lastName}
            onChange={myChangeHandler}
        />
        <br /><br />


        <input
            type="text"
            placeholder="Company Name"
            name="companyName"
            className="border-0 p-2 new-quote-new-customer-input"
            value={customerInfoEdit.companyName}
            onChange={myChangeHandler}
        />

        <input
            type="text"
            name="address"
            placeholder="Address"
            className="border-0 p-2 new-quote-new-customer-input ms-3"
            value={customerInfoEdit.address}
            onChange={myChangeHandler}
        />


        <br /><br />




        <input
            type="text"
            name="workPhone"
            placeholder="Phone number"
            className="border-0 p-2 new-quote-new-customer-input"
            value={customerInfoEdit.phoneNumber}
            onChange={myChangeHandler}
        />
        <input
            type="text"
            name="city"
            placeholder="City"
            className="border-0 p-2 new-quote-new-customer-input ms-3"
            value={customerInfoEdit.city}
            onChange={myChangeHandler}
        />

        <br /><br />


        <input
            type="text"
            name="cellPhone"
            placeholder="cell number"
            className="border-0 p-2 new-quote-new-customer-input"
            value={customerInfoEdit.cellNumber}
            onChange={myChangeHandler}
        />


        <input
            type="text"
            name="state"
            placeholder="state"
            className="border-0 p-2 new-quote-new-customer-input ms-3"
            value={customerInfoEdit.state}
            onChange={myChangeHandler}
        />
        <br /><br />
        <input
            type="email"
            name="email"
            placeholder="Email"
            className="border-0 p-2 new-quote-new-customer-input"
            value={customerInfoEdit.email}
            onChange={myChangeHandler}
        />




        <input
            type="text"
            placeholder="postalCode"
            name="postalCode"
            className="border-0 p-2 new-quote-new-customer-input ms-3"
            value={customerInfoEdit.postalCode}
            onChange={myChangeHandler}
        />
        <br /><br />



        <br /><br />
        <input type='submit' className="btn btn-primary px-5 py-2 me-3  mt-3" value="Confirm"></input>
        <input type='button' className="btn btn-danger px-5 py-2 me-3  mt-3" value="Cancel" onClick={()=>{
            setShowEdit(false)
           }}></input>
    </form>
    return (
        <>

            <div className="customer-details">
                <div className="d-flex align-items-center">
                    <h4>{`${customerInfo.companyName.toUpperCase()}`}</h4>
                    {!showEdit && props.selectedCustomer!==null&& <button className="btn btn-outline-danger ms-4 py-1 px-" onClick={() => {
                        setShowEdit(!showEdit);
                        setCustomerInfoEdit(customerInfo)
                    }}>
                        {buttonText}
                    </button>}
                    
                </div>
                {display}
            </div>
        </>
    )

}


export default CustomerInfoPage