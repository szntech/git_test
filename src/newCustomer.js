import React, { useState, useEffect } from 'react';
import "./css/quotes.css";
import "./css/side-list.css";
import "./css/navbar.css";

function NewCustomer(props) {


    const [edit, setEdit] = useState(false);
    const [data, setData] = useState({ zipcode: null, firstName: null, lastName: null, phoneNumber: null, cellNumber: null, state: null, email: null, city: null });

    const mySubmitHandler = (event) => {
        event.preventDefault();


        fetch(`http://localhost:3002/customerDetail`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(res => res.json())
            .then(res => {

const id=res[0].insertId;
                console.log(res,'the Customer Response')
                const temp={companyId:id,...data}

                console.log(temp,'temp')

                props.setCustomerInfo(data)

                props.setEdit('complete')

            });

        
    }


    const myChangeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        const tempData = { ...data };
        tempData[nam] = val;

        setData(tempData);
        console.log(tempData)
        //  this.setState({[nam]: val});
    }

    return (<>

        <div className="col-9">
            <h4>Customer Details</h4>
            <div className="buttons mt-4">
                <form onSubmit={mySubmitHandler}>

                    <input
                        required
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        className="border-0 p-2 new-quote-new-customer-input"
                        onChange={myChangeHandler}
                    />
                    <input
                        required
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        className="border-0 p-2 new-quote-new-customer-input ms-3"
                        onChange={myChangeHandler}
                    />
                    <br /><br />


                    <input
                        type="text"
                        placeholder="Company Name"
                        name="companyName"
                        className="border-0 p-2 new-quote-new-customer-input"
                        onChange={myChangeHandler}
                    />

                    <input
                        type="text"
                        name="address"
                        placeholder="Address"
                        className="border-0 p-2 new-quote-new-customer-input ms-3"
                        onChange={myChangeHandler}
                    />


                    <br /><br />




                    <input
                        type="text"
                        name="phoneNumber"
                        placeholder="Phone number"
                        className="border-0 p-2 new-quote-new-customer-input"
                        onChange={myChangeHandler}
                    />
                    <input
                        type="text"
                        name="city"
                        placeholder="City"
                        className="border-0 p-2 new-quote-new-customer-input ms-3"
                        onChange={myChangeHandler}
                    />

                    <br /><br />


                    <input
                        type="text"
                        name="cellNumber"
                        placeholder="cell number"
                        className="border-0 p-2 new-quote-new-customer-input"
                        onChange={myChangeHandler}
                    />


                    <input
                        type="text"
                        name="state"
                        placeholder="State"
                        className="border-0 p-2 new-quote-new-customer-input ms-3"
                        onChange={myChangeHandler}
                    />
                    <br /><br />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        className="border-0 p-2 new-quote-new-customer-input"
                        onChange={myChangeHandler}
                    />




                    <input
                        type="text"
                        placeholder="Zipcode"
                        name="zipcode"
                        className="border-0 p-2 new-quote-new-customer-input ms-3"
                        onChange={myChangeHandler}
                    />
                    <br /><br />



                    <br /><br />
                    <input type='submit' className="btn btn-primary px-5 py-2 me-3 d-block mt-3" value="Confirm"></input>
                </form>
            </div>
        </div>


    </>)


}

export default NewCustomer;