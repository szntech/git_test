import React, { useState, useEffect } from 'react';
import { BrowserRouter, Redirect, Link, Route, Switch, useHistory } from 'react-router-dom';
import "./css/side-list.css";
import "./css/navbar.css";
import "./css/customer.css";



function CustomerInfoPage(props) {

    const { customerInfo, setCustomerInfo } = props;

    const [edit, setEdit] = useState(false);
    const [customerInfoEdit, setCustomerInfoEdit] = useState(customerInfo);
    const [buttonText, setButtonText] = useState('Edit');


    const myChangeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        const tempData = { ...customerInfo };
        tempData[nam] = val;

        setCustomerInfoEdit(tempData);
        //  console.log(tempData)
        //  this.setState({[nam]: val});
    }



    const mySubmitHandler = (event) => {
        event.preventDefault();
        setEdit(false)

        /*fetch(`${global.config.host}/customerDetail`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(res => res.json())
            .then(res => {

                const id = res[0].insertId;
                console.log(res, 'the Customer Response')
                const temp = { customerId: id, ...data }

                console.log(temp, 'temp')

                props.setCustomerInfo(temp)

                props.setEdit('complete')

            });
*/

    }

    const display = edit === false ? <div className="row mt-4">
        <div className="col-6">
            <div className="details">
                <div className="d-flex align-items-center my-2">
                    <h6>Full name</h6>
                    <p>{`${customerInfo.firstName} ${customerInfo.lastName}`}</p>
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
                    <h6>Zipcode</h6>
                    <p>{`${customerInfo.postalCode}`}</p>
                </div>
            </div>
        </div>
        <div className="col-6">
            <div className="details">
                <div className="d-flex align-items-center my-2">
                    <h6>Phone</h6>
                    <p>{`${customerInfo.phoneNumber}`}</p>
                </div>
                <div className="d-flex align-items-center my-2">
                    <h6>Email</h6>
                    <p>{`${customerInfo.email}`}</p>
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
            name="City"
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
            name="zipcode"
            className="border-0 p-2 new-quote-new-customer-input ms-3"
            value={customerInfoEdit.postalCode}
            onChange={myChangeHandler}
        />
        <br /><br />



        <br /><br />
        <input type='submit' className="btn btn-primary px-5 py-2 me-3 d-block mt-3" value="Confirm"></input>
    </form>
    return (
        <>

            <div className="customer-details">
                <div className="d-flex align-items-center">
                    <h4>Quibic Company</h4>
                    {!edit && <button className="btn btn-outline-danger ms-2 py-1 px-3" onClick={() => {
                        setEdit(!edit);
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