import React, { useState, useEffect } from 'react';
import { BrowserRouter, Redirect, Link, Route, Switch, useHistory } from 'react-router-dom';
import "./css/side-list.css";
import "./css/navbar.css";
import "./css/customer.css";
import CustomerInfo from "./customerInfo_customerpage"
import QuoteInfo from "./quoteinfo_customerpage"

function CustomerSelected(props) {

    const [customerInfo, setCustomerInfo] = useState({ firstName: "", lastName: "", city: "", state: "", postalCode: "", workPhone: "", email: "",companyName:"",address:"",phoneNumber:"",cellNumber:"" });
    const [quotesInfo, setQuotesInfo] = useState([]);



    console.log(props.selectedCustomer, 'props.selectedCustomer')

    useEffect(() => {
        if (props.selectedCustomer !== null) {
            console.log(props.selectedCustomer, 'props.selectedCustomer')
            fetch(`${global.config.host}/customerInfo?relatedCustomer=${props.selectedCustomer.RelatedCustomer}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }

            }).then(res => res.json())
                .then(res => {

                    console.log(res, 'customers')
                    setCustomerInfo(res.customerInfo[0])
                    setQuotesInfo(res.quotesInfo)
                    console.log(customerInfo, 'customerInfo')

                })
        }
    }, [props.selectedCustomer])
    const history = useHistory();

    


    return (<>

        { <div className="col-lg-9 co-xl-9 h-100">
            <button className="border-0 bg-white customer-info-title">
                Customer Information
            </button>
            {/* Customers Info */}
            <div className="customers-info bg-white">
                {/* Customer Details */ console.log('got here')}
                <CustomerInfo setCustomerInfo={setCustomerInfo} customerInfo={customerInfo}></CustomerInfo>
                {/* Customer Quotes */}
               <QuoteInfo quotesInfo={quotesInfo}></QuoteInfo>
            </div>
        </div>

        } </>)
}
export default CustomerSelected